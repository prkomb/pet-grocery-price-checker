import { Box, Typography } from "@mui/material";

const ResetPasswordHeader = () => {
  return (
    <Box my={3}>
      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{ fontFamily: "Manrope", fontSize: "20px" }}
      >
        Reset Password
      </Typography>

      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{ fontFamily: "Manrope", color: "#C7C7C7" }}
      >
        No worries we’ll change your password
      </Typography>
    </Box>
  );
};

export default ResetPasswordHeader;
