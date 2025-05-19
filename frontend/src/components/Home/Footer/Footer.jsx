import {
  Box,
  Divider,
  Typography,
  Stack,
  TextField,
  Button,
} from "@mui/material";
import { Link, Form } from "react-router-dom";
import { navLinks, rulesLinks } from "./FooterData";
import Brand from "@/assets/images/Brand.png";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#1B1F3B",
        padding: "20px 0",
        // maxWidth: "100%",
        height: "319px",
        minHeight: "fit-content",
        maxHeight: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mx: "auto",

          width: "80%",
          maxWidth: "100%",
        }}
      >
        <Box
          display="flex"
          justifyContent={{ xs: "center", md: "space-between" }}
          flexWrap="wrap"
          sx={{ width: "100%" }}
        >
          <Box>
            <Box>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  color: "#fff",
                  position: "relative",
                  pl: 5,
                  fontFamily: "Poppins",
                  fontWeight: 600,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    left: "0",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: 24,
                    height: 24,
                    backgroundImage: `url(${Brand})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  },
                }}
              >
                PriceHunt
              </Typography>
              <Box component="nav">
                <Stack
                  component="ul"
                  direction={{ xs: "column", md: "row" }}
                  spacing={4}
                  sx={{
                    color: "white",
                    textAlign: { xs: "center", lg: "left" },
                    margin: "39px 0",

                    fontFamily: "Poppins",
                    fontWeight: 400,
                  }}
                >
                  {navLinks.map((link) => {
                    return (
                      <>
                        <Link key={link.id} to={link.path}>
                          {link.label}
                        </Link>
                      </>
                    );
                  })}
                </Stack>
              </Box>
            </Box>
          </Box>
          <Box
            textAlign={{ xs: "center", md: "left" }}
            width={{ xs: "100%", md: "50%" }}
          >
            <Typography
              variant="body1"
              sx={{ color: "white", fontFamily: "Poppins", fontWeight: "600" }}
            >
              Get the best deals straight to your e-mail.
            </Typography>

            <Stack sx={{ margin: "10px 0" }}>
              <Form action="post" className="flex gap-4">
                <TextField
                  placeholder="Enter your email"
                  variant="outlined"
                  size="small"
                  sx={{
                    "& .MuiInputBase-input": {
                      width: "251px",
                      borderRadius: "24px",
                      bgcolor: "#F9FAFB",
                      border: "1px solid #fff",
                      color: "white",
                      "&::placeholder": {
                        color: "black",
                        fontSize: "12px",
                        fontWeight: "normal",
                      },
                    },
                  }}
                ></TextField>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    fontFamily: "Pacifico",
                    textTransform: "capitalize",
                    border: "10",
                    bgcolor: "#34D399",
                    borderRadius: "24px",
                    width: "128px",
                    height: "43px",
                  }}
                >
                  Subscribe
                </Button>
              </Form>
            </Stack>
          </Box>
        </Box>
        <Divider color="white" sx={{ margin: "15px 0" }} />
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "center", md: "flex-start" }}
          sx={{ mt: "20px", color: "white" }}
        >
          <Box>
            <Typography variant="body1" color="initial" sx={{ color: "white" }}>
              &#64; PriceHunt, All Right Reserved.
            </Typography>
          </Box>
          <Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              justifyContent={{ xs: "center", md: "flex-end" }}
            >
              {rulesLinks.map((rule) => {
                return (
                  <>
                    <Link
                      sx={{
                        fontFamily: "Poppins",
                        fontWeight: "400",
                        fontSize: "12px",
                      }}
                      to={rule.path}
                    >
                      {rule.label}
                    </Link>
                  </>
                );
              })}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
