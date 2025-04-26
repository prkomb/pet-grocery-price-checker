import { Stack, Box, Typography, Button } from "@mui/material";
import Brand from "@/assets/images/Brand.svg";
const Header = () => {
  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "space-between",
        padding: "15px 0",
      }}
    >
      <Stack direction="row" spacing={1} alignItems="center">
        <Box component="img" alt="Logo" src={Brand}></Box>
        <Typography variant="body1" color="initial" sx={{ color: "white" }}>
          PriceHunt
        </Typography>
      </Stack>
      <Stack>
        <Button
          size="small"
          sx={{
            color: "white",
            textTransform: "capitalize",
            borderRadius: "5px",
            padding: "0 25px",
            backgroundImage: "linear-gradient(#4F46E5, #10B981)",
          }}
        >
          Sign Up
        </Button>
      </Stack>
    </Stack>
  );
};

export default Header;
