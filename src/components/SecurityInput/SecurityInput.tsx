import TextField from "@mui/material/TextField/TextField";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import useRequestHandler from "../../hooks/useRequestHandler";
import { useTrade } from "../../contexts/Trade/useTrade";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";
import InputAdornment from "@mui/material/InputAdornment/InputAdornment";

const Security = () => {
  const [inputValue, setInputValue] = useState("");
  const typingTimeout = useRef<ReturnType<typeof setTimeout>>();
  const { clearSecurity, isTradeCompleted, setIsTradeCompleted } = useTrade();

  const { makeRequest, clearError, requestError, isRequestLoading } =
    useRequestHandler();

  useEffect(() => {
    if (isTradeCompleted) setInputValue("");
  }, [isTradeCompleted]);

  const debouncedSymbolChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    setInputValue(value);

    typingTimeout.current = setTimeout(async () => {
      if (!value) {
        clearError();
        clearSecurity();
        return;
      }

      makeRequest(value)
        .then(() => setIsTradeCompleted(false))
        .catch(clearSecurity);
    }, 500);
  };

  return (
    <Box sx={{ position: "relative", display: "flex", alignItems: "center" }}>
      <TextField
        id="security"
        label="Security"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={debouncedSymbolChange}
        sx={{
          ".MuiInputBase-input": {
            textTransform: "uppercase",
          },
        }}
        slotProps={{
          input: {
            inputProps: { maxLength: 5 },
            endAdornment: isRequestLoading && (
              <InputAdornment position="end">
                <CircularProgress color="inherit" size={24} />
              </InputAdornment>
            ),
          },
        }}
        error={!!requestError}
        helperText={requestError}
      />
    </Box>
  );
};

export default Security;
