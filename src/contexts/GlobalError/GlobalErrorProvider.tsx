import Box from "@mui/material/Box/Box";
import red from "@mui/material/colors/red";
import Typography from "@mui/material/Typography/Typography";
import { createContext, useState, PropsWithChildren } from "react";

const ERROR_TIMEOUT = 5000;

export interface GlobalErrorState {
  setError: (message: string) => void;
}

export const GlobalErrorContext = createContext<GlobalErrorState | null>(null);

export const GlobalErrorProvider = ({ children }: PropsWithChildren) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const setError = (message: string) => {
    setErrorMessage(message);

    setTimeout(() => setErrorMessage(null), ERROR_TIMEOUT);
  };

  return (
    <GlobalErrorContext.Provider value={{ setError }}>
      {children}
      {errorMessage && (
        <Box
          sx={{
            backgroundColor: red[500],
            position: "absolute",
            width: "100%",
            bottom: 0,
          }}
        >
          <Typography textAlign="center">{errorMessage}</Typography>
        </Box>
      )}
    </GlobalErrorContext.Provider>
  );
};
