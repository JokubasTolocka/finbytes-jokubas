import { useContext } from "react";
import { TradeContext, TradeState } from "./TradeProvider";

export const useTrade = (): TradeState => {
  const context = useContext(TradeContext);

  if (!context) throw new Error("useTrade must be used within a TradeProvider");

  return context;
};
