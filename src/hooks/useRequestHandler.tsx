import { useRef, useState } from "react";
import { getSecurityURL } from "../components/Security/utils";
import { useTrade } from "../contexts/Trade/useTrade";
import { useGlobalError } from "../contexts/GlobalError/useGlobalError";

const useRequestHandler = () => {
  const [requestError, setRequestError] = useState<string>();
  const { setErrorMessage } = useGlobalError();
  const isRequestGoing = useRef(false);

  const { setSecurity, clearSecurity } = useTrade();

  const clearError = () => setRequestError(undefined);

  const makeRequest = (symbol: string) => {
    if (isRequestGoing.current) return;

    isRequestGoing.current = true;

    return fetch(getSecurityURL(symbol))
      .then(async (res) => {
        if (res.body) {
          const parsedResponse = await res.json();

          if (parsedResponse.Information) {
            setRequestError(parsedResponse.Information);
            clearSecurity();
            return;
          }

          const responseSymbol = parsedResponse["Global Quote"]["01. symbol"];
          const price = parsedResponse["Global Quote"]["05. price"];

          if (responseSymbol && price) {
            setSecurity({ symbol: responseSymbol, price });
            clearError();
            isRequestGoing.current = false;
            return;
          }

          setErrorMessage("Failed to parse data");
        }
      })
      .catch((err) => setErrorMessage(err.message));
  };

  return { makeRequest, clearError, requestError };
};

export default useRequestHandler;
