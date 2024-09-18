import TextField from "@mui/material/TextField/TextField";
import React, { useEffect, useRef, useState } from "react";
import useRequestHandler from "./useRequestHandler";
import { useTrade } from "../../contexts/Trade/useTrade";

const Security = () => {
  const [inputValue, setInputValue] = useState("");
  const typingTimeout = useRef<number>();
  const { clearSecurity, security } = useTrade();

  const { makeRequest, clearError, formError } = useRequestHandler();

  useEffect(() => {
    if (!security) setInputValue("");
  }, [security]);

  const handleInputChange = ({
    target: { value: symbol },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (typingTimeout) clearTimeout(typingTimeout.current);
    setInputValue(symbol);

    typingTimeout.current = setTimeout(() => {
      if (!symbol) {
        clearError();
        clearSecurity();
        return;
      }

      makeRequest(symbol);
    }, 500);
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
