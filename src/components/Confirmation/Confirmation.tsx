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
  const [finalPrice, setFinalPrice] = useState<number>();
  const { security, amount, order, clearTrade, getTotalPrice } = useTrade();

  const handleClose = () => {
    setIsConfirmationOpen(false);
    clearTrade();
  };

  const confirmTrade = () => {
    setFinalPrice(getTotalPrice());
    // THIS IS WHERE THE REQUEST LOGIC WOULD SIT
    // await requestTradeConfirmation(url, {security, amount, order}).then(
    setIsConfirmationOpen(true);
  };

  const isDisabled = !security || !amount || !order;

  return (
    <>
      <Box
        sx={{
          mt: 6,
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          disabled={isDisabled}
          onClick={confirmTrade}
          sx={(theme) => ({
            width: "auto",
            [theme.breakpoints.up("sm")]: { width: "100%" },
          })}
          size="large"
        >
          Buy {security?.symbol}
        </Button>
      </Box>
      <Modal open={isConfirmationOpen} onClose={handleClose}>
        <Fade in={isConfirmationOpen}>
          <Container
            maxWidth="sm"
            sx={{
              padding: 0,
              height: "100%",
              display: "flex",
            }}
          >
            <ModalContent handleClose={handleClose} finalPrice={finalPrice} />
          </Container>
        </Fade>
      </Modal>
    </>
  );
};

export default Confirmation;
