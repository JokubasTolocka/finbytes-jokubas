import { useState } from "react";
import { getSecurityURL } from "./utils";
import { useSecurity } from "../../contexts/Security/useSecurity";

const useRequestHandler = () => {
  const [formError, setFormError] = useState<string>();

  const { setSecurity } = useSecurity();

  const clearError = () => setFormError(undefined);

  const makeRequest = (symbol: string) =>
    fetch(getSecurityURL(symbol)).then(async (res) => {
      if (res.body) {
        const parsedResponse = await res.json();

        if (parsedResponse.Information) {
          setFormError(parsedResponse.Information);
          return;
        }

        const responseSymbol = parsedResponse["Global Quote"]["01. symbol"];
        const price = parsedResponse["Global Quote"]["05. price"];

        setSecurity({ symbol: responseSymbol, price });

        clearError();
      }
    });

  return { makeRequest, clearError, formError };
};

export default useRequestHandler;
