import { Box } from "@mui/material";
import ForgotPasswordHeader from "./ForgotPasswordHeader";
import ForgotPasswordContent from "./ForgotPasswordContent";

const ForgotPassword = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: "linear-gradient(#1E40AF, #34D399)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "500px", bgcolor: "#ffff", borderRadius: "10px" }}>
          <ForgotPasswordHeader />

          <ForgotPasswordContent />
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
