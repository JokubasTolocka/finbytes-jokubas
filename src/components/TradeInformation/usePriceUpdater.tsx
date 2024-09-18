import { useEffect } from "react";
import useRequestHandler from "../../hooks/useRequestHandler";
import { useTrade } from "../../contexts/Trade/useTrade";

const usePriceUpdater = () => {
  const { makeRequest, requestError } = useRequestHandler();
  const { security } = useTrade();

  useEffect(() => {
    if (!security) return;

    const id = setInterval(() => makeRequest(security.symbol), 1000);

    return () => clearInterval(id);
  }, [makeRequest, security]);

  return { requestError };
};

export default usePriceUpdater;
