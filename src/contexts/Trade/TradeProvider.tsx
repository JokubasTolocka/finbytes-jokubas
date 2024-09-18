import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

export type Security = {
  symbol: string;
  price: number;
};

export interface TradeState {
  security?: Security;
  setSecurity: Dispatch<SetStateAction<Security | undefined>>;
  clearSecurity: () => void;
}

export const TradeContext = createContext<TradeState | null>(null);

const TradeProvider = ({ children }: PropsWithChildren) => {
  const [security, setSecurity] = useState<Security>();

  const clearSecurity = () => setSecurity(undefined);

  return (
    <TradeContext.Provider
      value={{
        security,
        setSecurity,
        clearSecurity,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default TradeProvider;
