import { ReactNode } from "react";
import { vi } from "vitest";
import { TradeContext } from "../contexts/Trade/TradeProvider";
import { OrderEnum } from "../contexts/Trade/types";

const MockTradeProvider = ({ children }: { children: ReactNode }) => {
  const mockSetSecurity = vi.fn();
  const mockClearSecurity = vi.fn();
  const mockSetAmount = vi.fn();
  const mockSetOrder = vi.fn();
  const mockClearTrade = vi.fn();
  const mockGetTotalPrice = vi.fn();
  const mockSetIsTradeCompleted = vi.fn();

  return (
    <TradeContext.Provider
      value={{
        security: undefined,
        setSecurity: mockSetSecurity,
        clearSecurity: mockClearSecurity,
        amount: 1,
        setAmount: mockSetAmount,
        order: OrderEnum.UNDEFINED,
        setOrder: mockSetOrder,
        clearTrade: mockClearTrade,
        getTotalPrice: mockGetTotalPrice,
        isTradeCompleted: false,
        setIsTradeCompleted: mockSetIsTradeCompleted,
      }}
    >
      {children}
    </TradeContext.Provider>
  );
};

export default MockTradeProvider;
