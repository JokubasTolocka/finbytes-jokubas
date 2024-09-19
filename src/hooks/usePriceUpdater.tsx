import { useEffect, useRef } from "react";
import useRequestHandler from "./useRequestHandler";
import { useTrade } from "../contexts/Trade/useTrade";

const usePriceUpdater = () => {
  const timeout = useRef<number>();

  const { makeRequest } = useRequestHandler();
  const { security, isTradeCompleted } = useTrade();

  useEffect(() => {
    if (!security || isTradeCompleted) return clearInterval(timeout.current);

    timeout.current = setInterval(() => makeRequest(security.symbol), 1000);

    return () => clearInterval(timeout.current);
  }, [isTradeCompleted, makeRequest, security]);
};

export default usePriceUpdater;
