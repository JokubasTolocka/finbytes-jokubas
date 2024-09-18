import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box/Box";
import { useTrade } from "../../contexts/Trade/useTrade";
import { TRADE_TYPES } from "../../contexts/Trade/types";

const TradeTypes = () => {
  const { type, setType } = useTrade();

  const handleClick = (option: TRADE_TYPES) => {
    if (option === type) setType(TRADE_TYPES.UNDEFINED);
    else setType(option);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, my: 1 }}>
      {Object.values(TRADE_TYPES).map(
        (enumType) =>
          enumType && (
            <Button
              variant={type === enumType ? "contained" : "text"}
              color="primary"
              onClick={() => handleClick(enumType)}
              sx={{ px: 2 }}
              key={enumType}
            >
              {enumType}
            </Button>
          )
      )}
    </Box>
  );
};

export default TradeTypes;
