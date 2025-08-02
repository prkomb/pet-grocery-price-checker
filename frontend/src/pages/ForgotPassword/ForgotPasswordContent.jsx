import {
  Box,
  FormControl,
  FormLabel,
  TextField,
  InputAdornment,
  Typography,
  Button,
  Stack,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { PersonOutlineOutlined } from "@mui/icons-material";

const ForgotPasswordContent = () => {
  return (
    <Box sx={{ width: "calc(100% - 100px)", margin: "0 auto" }}>
      <FormControl fullWidth sx={{ marginTop: "10px" }}>
        <FormLabel sx={{ color: "#000000", fontSize: "12px" }}>
          Enter your email
        </FormLabel>
        <TextField
          size="small"
          placeholder="Enter your email"
          sx={{
            bgcolor: "#EEEEEE",
            "& .MuiInputBase-input::placeholder": {
              color: "#808080",
              opacity: 0.3,
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonOutlineOutlined></PersonOutlineOutlined>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </FormControl>
      <Stack spacing={2} mt={3} direction="column">
        <Button
          sx={{
            bgcolor: "#34D399",
            padding: "10px 0",
            textTransform: "capitalize",
            borderRadius: "10px",
          }}
          color="#0000"
        >
          Reset Password
        </Button>
        <Button
          sx={{
            bgcolor: "#E5F0EC",
            textTransform: "capitalize",
            padding: "10px 0",
            color: "#000000",
            borderRadius: "10px",
          }}
        >
          Back to Login
        </Button>
      </Stack>

      <Box textAlign="center" my={3}>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontWeight: 600,
            fontFamily: "Manrope",
            fontSize: "12px",
            borderRadius: "10px",
          }}
        >
          Don’t have an account?{" "}
          <NavLink
            to="/register"
            style={() => ({
              color: "#0000FF",
            })}
          >
            Sign Up
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default ForgotPasswordContent;
