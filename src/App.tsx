import Container from "@mui/material/Container/Container";
import TextField from "@mui/material/TextField/TextField";
import Typography from "@mui/material/Typography/Typography";

const App = () => (
  <Container maxWidth="xs">
    <Typography variant="h4">Stock Order</Typography>
    <TextField
      id="security"
      label="Security"
      variant="outlined"
      fullWidth
      sx={{
        ".MuiInputBase-input": {
          textTransform: "uppercase",
        },
      }}
      slotProps={{
        input: {
          inputProps: {
            maxLength: 5,
          },
        },
      }}
    />
  </Container>
);

export default App;
