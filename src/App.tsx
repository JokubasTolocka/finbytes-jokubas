import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Box from "@mui/material/Box/Box";
import TradeSettings from "./components/TradeSettings/TradeSettings";
import Confirmation from "./components/Confirmation/Confirmation";
import usePriceUpdater from "./hooks/usePriceUpdater";
import TradeInformation from "./components/TradeInformation/TradeInformation";
import Security from "./components/SecurityInput/SecurityInput";

const App = () => {
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
          <TradeInformation />
          <Confirmation />
        </Box>
      </Box>
    </Container>
  );
};

export default App;
