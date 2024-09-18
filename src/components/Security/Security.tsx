import TextField from "@mui/material/TextField/TextField";
import React, { useState } from "react";
import useRequestHandler from "./useRequestHandler";
import { useSecurity } from "../../contexts/Security/useSecurity";

const Security = () => {
  const [inputValue, setInputValue] = useState("");
  const [typingTimeout, setTypingTimeout] = useState<number | null>(null);
  const { clearSecurity } = useSecurity();

  const { makeRequest, clearError, formError } = useRequestHandler();

  const handleInputChange = ({
    target: { value: symbol },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (typingTimeout) clearTimeout(typingTimeout);
    setInputValue(symbol);

    setTypingTimeout(
      setTimeout(() => {
        if (!symbol) {
          clearError();
          clearSecurity();
          return;
        }

        makeRequest(symbol);
      }, 500)
    );
  };

  return (
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
      error={!!formError}
      helperText={formError}
    />
  );
};

export default Security;
