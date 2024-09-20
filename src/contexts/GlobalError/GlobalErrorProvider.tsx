import Alert from "@mui/material/Alert/Alert";
import Snackbar from "@mui/material/Snackbar/Snackbar";
import {
  createContext,
  useState,
  PropsWithChildren,
  Dispatch,
  SetStateAction,
} from "react";

const ERROR_TIMEOUT = 5000;

export interface GlobalErrorState {
  setErrorMessage: Dispatch<SetStateAction<string | undefined>>;
}

export const GlobalErrorContext = createContext<GlobalErrorState | null>(null);

export const GlobalErrorProvider = ({ children }: PropsWithChildren) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const clearError = () => setErrorMessage(undefined);

  return (
    <GlobalErrorContext.Provider value={{ setErrorMessage }}>
      {children}
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={ERROR_TIMEOUT}
        onClose={clearError}
      >
        <Alert onClose={clearError} severity="error" variant="filled">
          {errorMessage}
        </Alert>
      </Snackbar>
    </GlobalErrorContext.Provider>
  );
};
