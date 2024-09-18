import { TextField } from "@mui/material";
import React from "react";
import { useTrade } from "../contexts/Trade/useTrade";

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
    <TextField
      id="amount"
      label="Amount"
      variant="outlined"
      fullWidth
      value={String(amount)}
      onChange={handleInputChange}
      type="number"
    />
  );
};

export default TradeOptions;
