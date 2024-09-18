import Modal from "@mui/material/Modal/Modal";
import { useTrade } from "../../contexts/Trade/useTrade";
import Button from "@mui/material/Button/Button";
import { useState } from "react";
import ModalContent from "./ModalContent";
import Container from "@mui/material/Container/Container";
import Fade from "@mui/material/Fade/Fade";
import Box from "@mui/material/Box/Box";

const Confirmation = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { security, amount, order, clearTrade } = useTrade();

  const handleClose = () => {
    setIsConfirmationOpen(false);
    clearTrade();
  };

  const confirmTrade = () => {
    // THIS IS WHERE THE REQUEST LOGIC WOULD SIT
    // await requestTradeConfirmation(url, {security, amount, order}).then(
    setIsConfirmationOpen(true);
  };

  const isDisabled = !security || !amount || !order;

  return (
    <Box sx={{ mt: 6, width: "100%" }}>
      <Button
        variant="contained"
        disabled={isDisabled}
        onClick={confirmTrade}
        fullWidth
        size="large"
      >
        Buy {security?.symbol}
      </Button>
      <Modal open={isConfirmationOpen} onClose={handleClose}>
        <Fade in={isConfirmationOpen}>
          <Container maxWidth="sm" sx={{ padding: 2, height: "100%" }}>
            <ModalContent handleClose={handleClose} />
          </Container>
        </Fade>
      </Modal>
    </Box>
  );
};

export default Confirmation;
