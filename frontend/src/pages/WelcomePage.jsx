import { Box, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Brand from "@/assets/images/LogoWelcome.svg";

function WelcomePage() {
  return (
    <>
      <Box
        sx={{
          height: "100vh",
          border: "1px solid",
          background: "linear-gradient(#1e40af, #3ad399)",
        }}
      >
        <Box textAlign="end" padding={2}>
          <Button
            sx={{
              border: "1px solid white",
              color: "white",
              borderRadius: "24px",
              fontSize: "14px",
              fontFamily: "Poppins",
            }}
          >
            About Us
          </Button>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          sx={{ height: "600px", margin: "10px 0" }}
        >
          <Box sx={{ width: "469px", maxWidth: "95%" }}>
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              sx={{ margin: "20px 0", fontSize: "100px" }}
            >
              <Box
                component="img"
                src={Brand}
                sx={{
                  display: "block",
                  textAlign: "center",
                  width: "100px",
                  margin: "50px 0",
                }}
              ></Box>
            </Box>
            <Typography
              sx={{
                color: "white",
                fontSize: "40px",
                fontFamily: "Poppins",
                fontWeight: "600",
              }}
              textAlign="center"
            >
              Welcome to{" "}
              <Typography
                component="span"
                sx={{
                  color: "#64FCD9",
                  fontSize: "40px",
                  fontFamily: "Poppins",
                  fontWeight: "600",
                }}
              >
                PriceHunt
              </Typography>
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                textAlign: "center",
                fontSize: "20px",
                fontStyle: "italic",
                fontWeight: "bold",
                color: "white",
                margin: "44px 0",
              }}
            >
              Smarter Grocery Shopping Starts Here? Why Pay More? Find Better
              Prices Instantly? Save Time. Save Money. Shop Smarter.
            </Typography>
            <Box textAlign="center">
              <NavLink
                to="/home"
                style={{
                  display: "inline-block",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "5px 20px",
                  textDecoration: "none",
                  backgroundColor: "#fff",
                  border: "2px solid white",
                  borderRadius: "8px",
                  backgroundImage: "linear-gradient(90deg, #4F46E5, #10B981)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  color: "transparent",
                  transition: "all 0.3s ease",
                }}
              >
                Get Started
              </NavLink>

              <Box position="absolute" bottom={10} left={0} right={0}>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontFamily: "Poppins",
                    fontSize: "12px",
                    fontWeight: "500",
                    color: "white",
                  }}
                >
                  &#169; {new Date().getFullYear()} PriceHunt
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default WelcomePage;
