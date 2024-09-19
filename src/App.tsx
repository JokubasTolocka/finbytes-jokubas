import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Security from "./components/Security";
import { useTrade } from "./contexts/Trade/useTrade";
import TradeInformation from "./components/TradeInformation";
import Box from "@mui/material/Box/Box";
import TradeSettings from "./components/TradeSettings/TradeSettings";
import Confirmation from "./components/Confirmation/Confirmation";
import usePriceUpdater from "./hooks/usePriceUpdater";

const App = () => {
  const { security, amount } = useTrade();

  usePriceUpdater();

  return (
    <Container maxWidth="xs" sx={{ height: "100vh", display: "flex" }}>
      <Box
        sx={(theme) => ({
          my: 4,
          [theme.breakpoints.up("sm")]: { my: "auto" },
        })}
      >
        <Typography variant="h4" fontWeight={500} sx={{ mb: 4 }}>
          Stock Order
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Security />
          <TradeSettings />
          {security && !!amount && <TradeInformation />}
          <Confirmation />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
