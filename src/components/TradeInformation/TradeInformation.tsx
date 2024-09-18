import Box from "@mui/material/Box/Box";
import { useTrade } from "../../contexts/Trade/useTrade";
import Typography from "@mui/material/Typography";
import { Security } from "../../contexts/Trade/types";
import grey from "@mui/material/colors/grey";
import usePriceUpdater from "./usePriceUpdater";
import red from "@mui/material/colors/red";

const TradeInformation = () => {
  const { security, amount } = useTrade();

  const { requestError } = usePriceUpdater();

  const totalPrice = amount * (security as Security).price;

  return (
    <Box>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.secondary.main,
          color: theme.palette.secondary.light,
          borderRadius: 1,
          padding: 2,
        })}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5" fontWeight={500}>
            {security?.symbol}
          </Typography>
          <Typography variant="h5" fontWeight={500}>
            ${security?.price}
          </Typography>
        </Box>
        <Typography color={red[500]} variant="caption">
          {requestError}
        </Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, color: grey[600] }}>
          Estimated trading amount:
        </Typography>
        <Typography variant="body2">
          Buy {amount}x${security?.price} {security?.symbol} ≈ ${totalPrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default TradeInformation;
