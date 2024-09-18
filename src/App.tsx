import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Security from "./components/Security/Security";
import { useTrade } from "./contexts/Trade/useTrade";
import TradeInformation from "./components/TradeInformation";
import Box from "@mui/material/Box/Box";
import TradeOptions from "./components/TradeOptions/TradeOptions";
import Confirmation from "./components/Confirmation/Confirmation";

const App = () => {
  const { security, amount } = useTrade();

  return (
    <Container maxWidth="xs">
      <Typography variant="h4" fontFamily="Inter" fontWeight={500}>
        Stock Order
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Security />
        <TradeOptions />
        {security && !!amount && <TradeInformation />}
        <Confirmation />
      </Box>
    </Container>
  );
};

export default App;
