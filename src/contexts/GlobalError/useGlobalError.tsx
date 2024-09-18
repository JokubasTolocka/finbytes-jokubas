import { useContext } from "react";
import { GlobalErrorContext, GlobalErrorState } from "./GlobalErrorProvider";

export const useGlobalError = (): GlobalErrorState => {
  const context = useContext(GlobalErrorContext);

  if (!context)
    throw new Error("useGlobalError must be used within a GlobalErrorProvider");

  return context;
};
