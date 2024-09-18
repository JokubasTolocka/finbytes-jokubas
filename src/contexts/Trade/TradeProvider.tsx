import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import { Security, TRADE_TYPES } from "./types";

export interface TradeState {
  security?: Security;
  setSecurity: Dispatch<SetStateAction<Security | undefined>>;
  clearSecurity: () => void;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  type: TRADE_TYPES;
  setType: Dispatch<SetStateAction<TRADE_TYPES>>;
  clearTrade: () => void;
}

export const TradeContext = createContext<TradeState | null>(null);

const TradeProvider = ({ children }: PropsWithChildren) => {
  const [security, setSecurity] = useState<Security>();
  const [amount, setAmount] = useState(1);
  const [type, setType] = useState<TRADE_TYPES>(TRADE_TYPES.UNDEFINED);

  const clearSecurity = () => setSecurity(undefined);

  const clearTrade = () => {
    clearSecurity();
    setAmount(1);
    setType(TRADE_TYPES.UNDEFINED);
  };

  return (
    <TradeContext.Provider
      value={{
        security,
        setSecurity,
        clearSecurity,
        amount,
        setAmount,
        type,
        setType,
        clearTrade,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;
