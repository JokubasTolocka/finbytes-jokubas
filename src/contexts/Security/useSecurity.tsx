import { useContext } from "react";
import { SecurityContext, SecurityState } from "./SecurityProvider";

export const useSecurity = (): SecurityState => {
  const context = useContext(SecurityContext);

  if (!context)
    throw new Error("useSecurity must be used within a SecurityProvider");

  return context;
};
