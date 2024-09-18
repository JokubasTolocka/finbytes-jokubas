import Button from "@mui/material/Button/Button";
import Box from "@mui/material/Box/Box";
import { useTrade } from "../../contexts/Trade/useTrade";
import { OrderEnum } from "../../contexts/Trade/types";

const TradeTypes = () => {
  const { order, setOrder } = useTrade();

  const handleClick = (option: OrderEnum) => {
    if (option === order) setOrder(OrderEnum.UNDEFINED);
    else setOrder(option);
  };

  return (
    <Box sx={{ display: "flex", gap: 2, my: 1 }}>
      {Object.values(OrderEnum).map(
        (orderType) =>
          orderType && (
            <Button
              variant={order === orderType ? "contained" : "text"}
              onClick={() => handleClick(orderType)}
              sx={{ px: 2 }}
              key={orderType}
            >
              {orderType}
            </Button>
          )
      )}
    </Box>
  );
};

export default TradeTypes;
