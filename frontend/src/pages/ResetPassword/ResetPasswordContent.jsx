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
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

const ResetPasswordContent = () => {
  const { register } = useForm();

  const changePassword = (data) => {
    console.log(data);
  };

  return (
    <Box sx={{ width: "calc(100% - 100px)", margin: "0 auto" }}>
      <FormControl fullWidth sx={{ marginTop: "10px", padding: "10px" }}>
        <TextField
          type="password"
          {...register("password")}
          size="medium"
          placeholder="Set new password"
          sx={{
            bgcolor: "#EEEEEE",
            borderRadius: "20px",

            "& .MuiInputBase-input::placeholder": {
              color: "#808080",
              opacity: 0.3,
            },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        ></TextField>
      </FormControl>

      <FormControl fullWidth sx={{ padding: "10px" }}>
        <TextField
          {...register("confirmPassword")}
          size="medium"
          type="password"
          placeholder="Confirm new password"
          sx={{
            bgcolor: "#EEEEEE",
            borderRadius: "20px",

            "& .MuiInputBase-input::placeholder": {
              color: "#808080",
              opacity: 0.3,
            },

            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        ></TextField>
      </FormControl>

      <Box mt={3} sx={{ padding: 1 }}>
        <Button
          fullWidth
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
      </Box>

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

export default ResetPasswordContent;
