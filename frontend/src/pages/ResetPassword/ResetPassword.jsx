import {
  Box,
  Typography,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import { PersonOutlineOutlined } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import ResetPasswordHeader from "./ResetPasswordHeader";
import ResetPasswordContent from "./ResetPasswordContent";

const ResetPassword = () => {
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
          <ResetPasswordHeader />

          <ResetPasswordContent />
        </Box>
      </Box>
    </Box>
  );
};

export default ResetPassword;
