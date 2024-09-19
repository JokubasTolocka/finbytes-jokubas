import Box from "@mui/material/Box/Box";
import { ChangeEvent } from "react";
import { useTrade } from "../../contexts/Trade/useTrade";
import TradeTypes from "./TradeTypes";
import TextField from "@mui/material/TextField/TextField";

const TradeOptions = () => {
  const { amount, setAmount } = useTrade();

  const handleInputChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    const removedLeadingZeros = value.replace(/^0+/, "");
    const positiveWholeNumbersReg = new RegExp(/^[0-9]*$/);

    if (positiveWholeNumbersReg.test(removedLeadingZeros))
      setAmount(Number(removedLeadingZeros));
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
