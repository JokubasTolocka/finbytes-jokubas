import { useTrade } from "../../contexts/Trade/useTrade";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import grey from "@mui/material/colors/grey";
import Divider from "@mui/material/Divider/Divider";
import Button from "@mui/material/Button/Button";

interface Props {
  finalPrice?: number;
  handleClose: () => void;
}

const ModalContent = ({ handleClose, finalPrice }: Props) => {
  const { security, amount, order } = useTrade();

  return (
    <Box
      sx={(theme) => ({
        backgroundColor: grey[900],
        borderRadius: 4,
        padding: 3,
        width: "100%",
        m: "auto",
        [theme.breakpoints.down("sm")]: {
          mb: 0,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          pb: 6,
        },
      })}
    >
      <Typography variant="h5" align="center" fontWeight={500}>
        Trade confirmation
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" align="center">
        You have successfully made a {order} order of {amount} shares of{" "}
        {security?.symbol}.
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" align="center" color={grey[500]}>
          Total price:
        </Typography>
        <Typography
          variant="h2"
          align="center"
          fontWeight={500}
          style={{ wordBreak: "break-word" }}
        >
          ${finalPrice}
        </Typography>
      </Box>
      <Button variant="contained" size="large" fullWidth onClick={handleClose}>
        Close
      </Button>
    </Box>
  );
};

export default ModalContent;
