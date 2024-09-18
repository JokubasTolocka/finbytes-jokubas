import { TextField } from "@mui/material";
import Box from "@mui/material/Box/Box";
import React from "react";
import { useTrade } from "../../contexts/Trade/useTrade";
import TradeTypes from "./TradeTypes";

const TradeOptions = () => {
  const { amount, setAmount } = useTrade();

  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const removedLeadingZeros = value.replace(/^0+/, "");
    const reg = new RegExp(/^[0-9]*$/);

    if (reg.test(removedLeadingZeros)) setAmount(Number(removedLeadingZeros));
  };

  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <TextField
        id="amount"
        label="Amount"
        variant="outlined"
        fullWidth
        value={String(amount)}
        onChange={handleInputChange}
        type="number"
      />
      <TradeTypes />
    </Box>
  );
};

export default TradeOptions;
