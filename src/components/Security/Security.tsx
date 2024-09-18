import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useRef, useState } from "react";
import useRequestHandler from "../../hooks/useRequestHandler";
import { useTrade } from "../../contexts/Trade/useTrade";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Box from "@mui/material/Box/Box";

const Security = () => {
  const [isRequestLoading, setIsRequestLoading] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const typingTimeout = useRef<number>();
  const { clearSecurity, security } = useTrade();

  const { makeRequest, clearError, requestError } = useRequestHandler();

  useEffect(() => {
    if (!security) setInputValue("");
  }, [security]);

  const handleInputChange = ({
    target: { value: symbol },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    setInputValue(symbol);

    typingTimeout.current = setTimeout(async () => {
      if (!symbol) {
        clearError();
        clearSecurity();
        return;
      }

      setIsRequestLoading(true);
      await makeRequest(symbol).then(() => setIsRequestLoading(false));
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
        onChange={handleInputChange}
        sx={{
          ".MuiInputBase-input": {
            textTransform: "uppercase",
          },
        }}
        slotProps={{
          input: {
            inputProps: {
              maxLength: 5,
            },
          },
        }}
        error={!!requestError}
        helperText={requestError}
      />
      {isRequestLoading && (
        <CircularProgress
          color="inherit"
          size={24}
          sx={{
            position: "absolute",
            right: 16,
          }}
        />
      )}
    </Box>
  );
};

export default Security;
