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
  getTotalPrice: () => number | undefined;
}

export const TradeContext = createContext<TradeState | null>(null);

const TradeProvider = ({ children }: PropsWithChildren) => {
  const [security, setSecurity] = useState<Security>();
  const [amount, setAmount] = useState(1);
  const [order, setOrder] = useState<OrderEnum>(OrderEnum.UNDEFINED);

  const clearSecurity = () => setSecurity(undefined);

  const clearTrade = () => {
    clearSecurity();
    setAmount(1);
    setOrder(OrderEnum.UNDEFINED);
  };

  const getTotalPrice = () => {
    if (!security) return;

    return amount * security.price;
  };

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
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;
