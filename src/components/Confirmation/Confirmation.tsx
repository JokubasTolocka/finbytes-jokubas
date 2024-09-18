import Modal from "@mui/material/Modal/Modal";
import { useTrade } from "../../contexts/Trade/useTrade";
import Button from "@mui/material/Button/Button";
import { useState } from "react";
import ModalContent from "./ModalContent";
import Container from "@mui/material/Container/Container";
import Fade from "@mui/material/Fade/Fade";

const Confirmation = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const { security, amount, type, clearTrade } = useTrade();

  const handleClose = () => {
    setIsConfirmationOpen(false);
    clearTrade();
  };

  const confirmTrade = () => {
    // THIS IS WHERE THE REQUEST LOGIC WOULD SIT
    // await requestTradeConfirmation(url, {security, amount, type}).then(
    setIsConfirmationOpen(true);
  };

  const isDisabled = !security || !amount || !type;

  return (
    <>
      <Button variant="contained" disabled={isDisabled} onClick={confirmTrade}>
        Buy {security?.symbol}
      </Button>
      <Modal open={isConfirmationOpen} onClose={handleClose}>
        <Fade in={isConfirmationOpen}>
          <Container maxWidth="sm" sx={{ padding: 2, height: "100%" }}>
            <ModalContent handleClose={handleClose} />
          </Container>
        </Fade>
      </Modal>
    </>
  );
};

export default Confirmation;
