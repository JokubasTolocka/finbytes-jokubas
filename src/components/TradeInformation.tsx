import Box from "@mui/material/Box/Box";
import { useTrade } from "../contexts/Trade/useTrade";
import Typography from "@mui/material/Typography";
import { Security } from "../contexts/Trade/TradeProvider";

const TradeInformation = () => {
  const { security } = useTrade();

  const amount = 20;

  const totalPrice = amount * (security as Security).price;

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#332D32",
          borderRadius: 1,
          padding: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5">{security?.symbol}</Typography>
        <Typography variant="h5">${security?.price}</Typography>
      </Box>
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" sx={{ mb: 1, color: "#959595" }}>
          Estimated trading amount:
        </Typography>
        <Typography variant="body2">
          Buy 20x${security?.price} {security?.symbol} ≈ ${totalPrice}
        </Typography>
      </Box>
    </Box>
  );
};

export default TradeInformation;
