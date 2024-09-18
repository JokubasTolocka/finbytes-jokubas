import { useTrade } from "../../contexts/Trade/useTrade";
import Box from "@mui/material/Box/Box";
import Typography from "@mui/material/Typography/Typography";
import grey from "@mui/material/colors/grey";
import Divider from "@mui/material/Divider/Divider";
import Button from "@mui/material/Button/Button";

interface Props {
  handleClose: () => void;
}

const ModalContent = ({ handleClose }: Props) => {
  const { security, amount, order } = useTrade();

  return (
    <Box sx={{ backgroundColor: grey[900], borderRadius: 4, padding: 3 }}>
      <Typography variant="h5" align="center">
        Trade confirmation
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" align="center">
        You have successfully made a {order} order of {amount} shares of{" "}
        {security?.symbol}.
      </Typography>
      <Box sx={{ my: 4 }}>
        <Typography variant="body1" align="center">
          Total price:
        </Typography>
        {security && (
          <Typography variant="h2" align="center">
            ${amount * security?.price}
          </Typography>
        )}
      </Box>
      <Button variant="contained" fullWidth onClick={handleClose}>
        Close
      </Button>
    </Box>
  );
};

export default ModalContent;
