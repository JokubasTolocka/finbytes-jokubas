import Box from "@mui/material/Box/Box";
import TradeOptionSelect from "./TradeOptionSelect";
import AmountInput from "./AmountInput/AmountInput";

const TradeSettings = () => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <AmountInput />
    <TradeOptionSelect />
  </Box>
);

export default TradeSettings;
