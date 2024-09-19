import { useState } from "react";
import { getSecurityURL } from "./utils";
import { useTrade } from "../contexts/Trade/useTrade";
import { useGlobalError } from "../contexts/GlobalError/useGlobalError";

const useRequestHandler = () => {
  const [requestError, setRequestError] = useState<string>();
  const [isRequestLoading, setIsRequestLoading] = useState(false);

  const { setErrorMessage } = useGlobalError();
  const { setSecurity, clearSecurity } = useTrade();

  const clearError = () => setRequestError(undefined);

  const makeRequest = (symbol: string) => {
    if (isRequestLoading) return Promise.resolve();

    setIsRequestLoading(true);

    return fetch(getSecurityURL(symbol))
      .then(async (res) => {
        if (res.body) {
          const parsedResponse = await res.json();

          if (parsedResponse.Information) {
            setRequestError(parsedResponse.Information);
            setIsRequestLoading(false);
            clearSecurity();
            return;
          }

          const responseSymbol = parsedResponse["Global Quote"]["01. symbol"];
          const price = parsedResponse["Global Quote"]["05. price"];

          if (responseSymbol && price) {
            setSecurity({
              symbol: responseSymbol,
              price: Number(price),
            });
            clearError();
            setIsRequestLoading(false);
            return;
          }

          setErrorMessage("Failed to parse data");
        }
      })
      .catch((err) => {
        setIsRequestLoading(false);
        setErrorMessage(err.message);

        throw err;
      });
  };

  return {
    makeRequest,
    clearError,
    requestError,
    isRequestLoading,
  };
};

export default useRequestHandler;
