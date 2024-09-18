import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import { createContext, useState, PropsWithChildren, Dispatch } from "react";

const ERROR_TIMEOUT = 5000;

export interface GlobalErrorState {
  setErrorMessage: Dispatch<React.SetStateAction<string | null>>;
}

export const GlobalErrorContext = createContext<GlobalErrorState | null>(null);

export const GlobalErrorProvider = ({ children }: PropsWithChildren) => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const clearError = () => setErrorMessage(null);

  return (
    <GlobalErrorContext.Provider value={{ setErrorMessage }}>
      {children}
      {errorMessage && (
        <Snackbar
          open={!!errorMessage}
          autoHideDuration={ERROR_TIMEOUT}
          onClose={clearError}
        >
          <Alert
            onClose={clearError}
            severity="error"
            variant="filled"
            sx={{ width: "100%", mb: 1 }}
          >
            {errorMessage}
          </Alert>
        </Snackbar>
      )}
    </GlobalErrorContext.Provider>
  );
};
