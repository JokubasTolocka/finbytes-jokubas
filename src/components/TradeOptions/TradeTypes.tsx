import { useState } from "react";
import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box/Box";

enum TRADE_TYPES {
  MARKET = "Market",
  LIMIT = "Limit",
  STOP = "Stop",
  UNDEFINED = "",
}

const TradeTypes = () => {
  const [selectedOption, setSelectedOption] = useState<TRADE_TYPES>(
    TRADE_TYPES.UNDEFINED
  );

  const handleClick = (option: TRADE_TYPES) => {
    if (option === selectedOption) setSelectedOption(TRADE_TYPES.UNDEFINED);
    else setSelectedOption(option);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, my: 1 }}>
      {Object.values(TRADE_TYPES).map(
        (type) =>
          type && (
            <Button
              variant={selectedOption === type ? "contained" : "text"}
              color="primary"
              onClick={() => handleClick(type)}
              sx={{ px: 2 }}
              key={type}
            >
              {type}
            </Button>
          )
      )}
    </Box>
  );
};

export default TradeTypes;
