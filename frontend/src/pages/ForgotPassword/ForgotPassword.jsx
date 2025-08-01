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
        <Box sx={{ width: "500px", bgcolor: "#ffff" }}>
          <Typography variant="body1" color="initial" textAlign="center">
            Forgot Password
          </Typography>

          <Typography variant="body1" color="initial" textAlign="center">
            No worries we’ll send you reset instruction
          </Typography>

          <Box sx={{ width: "calc(100% - 100px)", margin: "0 auto" }}>
            <FormControl fullWidth>
              <FormLabel>Enter your email</FormLabel>
              <TextField
                size="small"
                placeholder="Enter your email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonOutlineOutlined></PersonOutlineOutlined>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
            </FormControl>
            <Stack spacing={2} direction="column">
              <Button sx={{ bgcolor: "#34D399" }} color="black">
                Reset Password
              </Button>
              <Button sx={{ bgcolor: "#E5F0EC" }}>Back to Login</Button>
            </Stack>

            <Box textAlign="center">
              <Typography variant="body1" color="initial">
                Don’t have an account? <NavLink to="/register">Sign Up</NavLink>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ForgotPassword;
