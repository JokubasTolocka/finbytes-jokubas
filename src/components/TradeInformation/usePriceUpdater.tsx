import { useEffect, useRef } from "react";
import useRequestHandler from "../../hooks/useRequestHandler";
import { useTrade } from "../../contexts/Trade/useTrade";

const usePriceUpdater = () => {
  const { makeRequest, requestError } = useRequestHandler();
  const { security } = useTrade();
  const isRequestGoing = useRef(false);

  useEffect(() => {
    if (!security) return;

    const timeout = setInterval(() => {
      if (!isRequestGoing.current) {
        isRequestGoing.current = true;

        makeRequest(security.symbol).then(() => {
          isRequestGoing.current = false;
        });
      }
    }, 1000);

    return () => clearInterval(timeout);
  }, [makeRequest, security]);

  return { requestError };
};

export default usePriceUpdater;
