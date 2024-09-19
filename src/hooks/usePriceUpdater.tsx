import { useEffect } from "react";
import useRequestHandler from "./useRequestHandler";
import { useTrade } from "../contexts/Trade/useTrade";
import { useGlobalError } from "../contexts/GlobalError/useGlobalError";

const usePriceUpdater = () => {
  const { makeRequest, requestError } = useRequestHandler();
  const { setErrorMessage } = useGlobalError();
  const { security } = useTrade();

  useEffect(() => {
    if (!security) return;

    const timeout = setInterval(() => makeRequest(security.symbol), 1000);

    return () => clearInterval(timeout);
  }, [makeRequest, requestError, security, setErrorMessage]);
};

export default usePriceUpdater;
