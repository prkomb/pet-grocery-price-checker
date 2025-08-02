import { Box, Typography } from "@mui/material";

const ForgotPasswordHeader = () => {
  return (
    <Box my={3}>
      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{ fontFamily: "Manrope", fontSize: "20px" }}
      >
        Forgot Password?
      </Typography>

      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{ fontFamily: "Manrope", color: "#C7C7C7" }}
      >
        No worries we’ll send you reset instruction
      </Typography>
    </Box>
  );
};

export default ForgotPasswordHeader;
