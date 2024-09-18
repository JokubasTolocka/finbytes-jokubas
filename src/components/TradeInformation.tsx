import Box from "@mui/material/Box/Box";
import { useSecurity } from "../contexts/Security/useSecurity";
import Typography from "@mui/material/Typography";
import { Security } from "../contexts/Security/SecurityProvider";

const TradeInformation = () => {
  const { security } = useSecurity();

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
