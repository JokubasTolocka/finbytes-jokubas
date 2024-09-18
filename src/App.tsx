import Container from "@mui/material/Container/Container";
import Typography from "@mui/material/Typography/Typography";
import Security from "./components/Security/Security";
import { useTrade } from "./contexts/Trade/useTrade";
import TradeInformation from "./components/TradeInformation";
import Box from "@mui/material/Box/Box";

const App = () => {
  const { security } = useTrade();

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">Stock Order</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Security />
        {security && <TradeInformation />}
      </Box>
    </Container>
  );
};

export default App;
