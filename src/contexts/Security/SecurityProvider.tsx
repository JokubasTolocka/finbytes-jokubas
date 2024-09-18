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

export interface SecurityState {
  security?: Security;
  setSecurity: Dispatch<SetStateAction<Security | undefined>>;
  clearSecurity: () => void;
}

export const SecurityContext = createContext<SecurityState | null>(null);

export const SecurityProvider = ({ children }: PropsWithChildren) => {
  const [security, setSecurity] = useState<Security>();

  const clearSecurity = () => setSecurity(undefined);

  return (
    <SecurityContext.Provider
      value={{
        security,
        setSecurity,
        clearSecurity,
      }}
    >
      {children}
    </SecurityContext.Provider>
  );
};
