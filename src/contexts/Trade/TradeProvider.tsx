import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";
import { Security, OrderEnum } from "./types";

export interface TradeState {
  security?: Security;
  setSecurity: Dispatch<SetStateAction<Security | undefined>>;
  clearSecurity: () => void;
  amount: number;
  setAmount: Dispatch<SetStateAction<number>>;
  order: OrderEnum;
  setOrder: Dispatch<SetStateAction<OrderEnum>>;
  clearTrade: () => void;
  getTotalPrice: () => string | undefined;
  isTradeCompleted: boolean;
  setIsTradeCompleted: Dispatch<SetStateAction<boolean>>;
}

export const TradeContext = createContext<TradeState | null>(null);

const TradeProvider = ({ children }: PropsWithChildren) => {
  const [security, setSecurity] = useState<Security>();
  const [amount, setAmount] = useState(1);
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.UNDEFINED);
  const [isTradeCompleted, setIsTradeCompleted] = useState(false);

  const clearSecurity = () => setSecurity(undefined);

  const clearTrade = () => {
    clearSecurity();
    setAmount(1);
    setOrder(OrderEnum.UNDEFINED);
    setIsTradeCompleted(true);
  };

  const getTotalPrice = () => security && (amount * security.price).toFixed(2);

  return (
    <TradeContext.Provider
      value={{
        security,
        setSecurity,
        clearSecurity,
        amount,
        setAmount,
        order,
        setOrder,
        clearTrade,
        getTotalPrice,
        isTradeCompleted,
        setIsTradeCompleted,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;
