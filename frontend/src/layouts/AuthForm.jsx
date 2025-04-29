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
import { useLoaderData } from "react-router-dom";

function AuthForm() {
  const { title, buttonText, bottomText, bottomLinkHref, bottomLinkText } =
    useLoaderData();
  console.log(title);
  return (
    <>
      <Box
        sx={{
          height: "100vh",

          backgroundImage: "linear-gradient(#1E40AF, #34D399)",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          sx={{ minHeight: "100vh", px: 5 }}
        >
          {/* Left Side */}
          <Box sx={{ maxWidth: "400px", width: "100%" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "48px",
                mb: 4,
                color: "white",
                textAlign: "center",
              }}
            >
              {title}
            </Typography>

            <Stack component="form" spacing={3}>
              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1, color: "white" }}>Email</FormLabel>
                <TextField
                  size="small"
                  placeholder="Enter your email"
                  variant="outlined"
                  fullWidth
                  sx={{
                    background: "linear-gradient(#10B981, #34D399)",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white",
                      opacity: "25%",
                      fontWeight: "bold",
                    },
                  }}
                />
              </FormControl>

              <FormControl fullWidth>
                <FormLabel sx={{ mb: 1, color: "white" }}>Password</FormLabel>
                <TextField
                  size="small"
                  placeholder="Enter your password"
                  variant="outlined"
                  fullWidth
                  sx={{
                    background: "linear-gradient(#10B981, #34D399)",
                    borderRadius: "10px",
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                    "& .MuiInputBase-input::placeholder": {
                      color: "white",
                      opacity: "25%",
                      fontWeight: "bold",
                    },
                  }}
                />
              </FormControl>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <FormGroup>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={<Typography color="white">Remember Me</Typography>}
                  />
                </FormGroup>

                <Button sx={{ color: "#474BCA", textTransform: "capitalize" }}>
                  Forgot Password?
                </Button>
              </Stack>

              <Button
                variant="contained"
                fullWidth
                sx={{
                  backgroundImage:
                    "linear-gradient(to right, #4F46E5, #10B981)",
                  color: "white",
                  borderRadius: "12px",
                  textTransform: "capitalize",
                  py: 1.5,
                }}
              >
                {buttonText}
              </Button>

              <Typography
                variant="body2"
                textAlign="center"
                sx={{ color: "rgba(255,255,255,0.8)", mt: 2 }}
              >
                {bottomText}{" "}
                <Box
                  component="a"
                  href={bottomLinkHref}
                  sx={{
                    color: "#474BCA",
                    fontWeight: 600,
                    cursor: "pointer",
                    ml: 0.5,
                  }}
                >
                  {bottomLinkText}
                </Box>
                <Box
                  component="a"
                  href={bottomLinkHref}
                  sx={{
                    color: "white",
                    textDecoration: "underline",
                    display: "inline-block",
                    marginLeft: "10px",
                  }}
                >
                  SignUp
                </Box>
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default AuthForm;
