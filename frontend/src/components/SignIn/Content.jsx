import {
  Stack,
  Box,
  Typography,
  FormLabel,
  FormControl,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";

function Content() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        flexWrap="wrap"
        alignItems="center"
        sx={{ height: "650px" }}
      >
        <Box sx={{ maxWidth: "100%" }}>
          <Typography
            variant="body1"
            color="initial"
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "50px",
              color: "white",
              textAlign: "center",
            }}
          >
            Login Now
          </Typography>

          <Stack component="form" sx={{ maxWidth: "100%" }}>
            <FormControl sx={{ maxWidth: "100%" }}>
              <FormLabel sx={{ margin: "15px 0", color: "white" }}>
                Email
              </FormLabel>
              <TextField
                size="small"
                placeholder="Enter your email id"
                variant="outlined"
                sx={{
                  width: "450px",
                  maxWidth: "100%",
                  display: "inline-block",
                  background: "linear-gradient(#10B981, #34D399)",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    fontFamily: "Poppins",
                    opacity: "25%",
                    fontWeight: "bold",
                    fontSize: "15px",
                  },
                }}
              />
            </FormControl>
            <FormControl sx={{ width: "100%", maxWidth: "100%" }}>
              <FormLabel sx={{ margin: "15px 0", color: "white" }}>
                Password
              </FormLabel>
              <TextField
                size="small"
                placeholder="Enter your email id"
                variant="outlined"
                sx={{
                  width: "450px",
                  maxWidth: "100%",
                  display: "inline-block",
                  background: "linear-gradient(#10B981, #34D399)",
                  borderRadius: "10px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                  "& .MuiInputBase-input::placeholder": {
                    color: "white",
                    fontFamily: "Poppins",
                    opacity: "25%",
                    fontWeight: "bold",
                    fontSize: "15px",
                  },
                }}
              ></TextField>
            </FormControl>

            <Stack direction="row" justifyContent="space-between">
              <FormGroup>
                <FormControlLabel
                  label="Remember Me"
                  sx={{ color: "white" }}
                  control={<Checkbox defaultChecked></Checkbox>}
                />
              </FormGroup>
              <Button sx={{ color: "#474BCA", textTransform: "capitalize" }}>
                Forgot Password?
              </Button>
            </Stack>

            <Button
              variant="outlined"
              sx={{
                margin: "20px 0",
                backgroundImage: "linear-gradient(to right, #4F46E5, #10B981)",
                color: "white",
                borderRadius: "12px",
              }}
            >
              Login
            </Button>

            <Typography variant="body1" color="initial" textAlign="center">
              Not registered yet?{" "}
              <Typography component="span" sx={{ color: "#474BCA" }}>
                Create an account
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                component="span"
                sx={{
                  color: "white",
                  display: "inline-block",
                  textDecoration: "underline",
                  marginLeft: "10px",
                }}
              >
                SignUp
              </Typography>
            </Typography>
          </Stack>
        </Box>
      </Stack>
    </>
  );
}

export default Content;
