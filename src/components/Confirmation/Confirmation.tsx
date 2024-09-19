import Modal from "@mui/material/Modal/Modal";
import { useTrade } from "../../contexts/Trade/useTrade";
import Button from "@mui/material/Button/Button";
import { useRef, useState } from "react";
import ModalContent from "./ModalContent";
import Container from "@mui/material/Container/Container";
import Fade from "@mui/material/Fade/Fade";
import Box from "@mui/material/Box/Box";
import mockApi from "../../utils/mockApi";
import { Trade } from "../../contexts/Trade/types";
import { useGlobalError } from "../../contexts/GlobalError/useGlobalError";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";

const Confirmation = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [finalTrade, setFinalTrade] = useState<Trade>();
  const isRequestLoading = useRef(false);

  const { setErrorMessage } = useGlobalError();
  const { security, amount, order, clearTrade } = useTrade();

  const handleClose = () => {
    setIsConfirmationOpen(false);
    clearTrade();
  };

  const confirmTrade = async () => {
    if (!security || !amount || !order) return;

    isRequestLoading.current = true;

    await mockApi({ security, amount, order })
      .then((data) => {
        setFinalTrade(data);
        setIsConfirmationOpen(true);
      })
      .catch(setErrorMessage)
      .finally(() => {
        isRequestLoading.current = false;
      });
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
          startIcon={isRequestLoading.current && <CircularProgress size={20} />}
          variant="contained"
          disabled={isDisabled || isRequestLoading.current}
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
            <ModalContent handleClose={handleClose} finalTrade={finalTrade} />
          </Container>
        </Fade>
      </Modal>
    </>
  );
};

export default Confirmation;
