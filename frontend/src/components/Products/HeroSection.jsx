import {
  Box,
  Typography,
  Stack,
  FormControl,
  FormLabel,
  TextField,
  Button,
} from "@mui/material";
import "@fontsource/poppins/400.css";

const HeroSection = () => {
  return (
    <Box bgcolor="#1a1b3c" p={8} borderRadius="20px" textAlign="center" mt={4}>
      <Box>
        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "white",
            fontSize: "50px",
            fontStyle: "italic",
            fontWeight: 400,
          }}
        >
          Find Products at the Best Price
        </Typography>

        <Typography
          sx={{
            fontFamily: "Poppins, sans-serif",
            color: "white",
            fontStyle: "italic",
            fontSize: "25px",
            fontWeight: 400,
          }}
        >
          Compare prices across stores in your area.
        </Typography>
      </Box>

      <Box>
        <Button
          color="success"
          variant="contained"
          bgcolor="success"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            bgcolor: "#4CAF50",
            padding: "10px 20px",
            marginTop: "20px",
            borderRadius: "12px",
          }}
        >
          Start Browsing
        </Button>
      </Box>

      <Stack
        flexWrap="wrap"
        direction="row"
        sx={{ width: { xs: "100%", md: "fit-content" }, p: 2 }}
        justifyContent="center"
        gap={3}
        bgcolor="#1D1F33"
        width="750px"
        padding="10px 0"
        borderRadius="20px"
        margin="0 auto"
        mt={4}
      >
        <FormControl sx={{ width: { xs: "100%", md: "auto" } }}>
          <FormLabel></FormLabel>
          <TextField
            id=""
            label=""
            placeholder="Category"
            sx={{
              input: {
                bgcolor: "#2B2D42",
                borderRadius: "10px",
                "&::placeholder": {
                  color: "white",
                },
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ width: { xs: "100%", md: "auto" } }}>
          <TextField
            label=""
            placeholder="Shop"
            sx={{
              bgcolor: "#2B2D42",

              borderRadius: "10px",
              input: {
                "&::placeholder": {
                  color: "white",
                },
              },
            }}
          />
        </FormControl>

        <FormControl sx={{ width: { xs: "100%", md: "auto" } }}>
          <FormLabel></FormLabel>
          <TextField
            id=""
            label=""
            placeholder="Price Range"
            sx={{
              input: {
                bgcolor: "#2B2D42",
                borderRadius: "10px",
                "&::placeholder": {
                  color: "white",
                },
              },
            }}
          />
        </FormControl>
        <Button
          sx={{
            bgcolor: "#22C55E",
            padding: "10px 10px",
            borderRadius: "15px",
            fontFamily: "Pacifico",
            color: "#1D1F33",
            textTransform: "capitalize",
            width: { xs: "100%", md: "auto" },
          }}
        >
          Filter
        </Button>
      </Stack>
    </Box>
  );
};

export default HeroSection;
