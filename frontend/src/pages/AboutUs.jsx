import { Container, Box, Typography, Stack, Button } from "@mui/material";
import Brand from "@/assets/images/Brand.svg";
const AboutUs = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(#1e40af, #3ad399)",
        height: "100dvh",
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          sx={{ padding: "20px" }}
          gap={2}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box
              sx={{
                margin: "20px auto",
                width: { xs: "100px", sm: "300px", md: "400px" },
                height: { xs: "100px", sm: "300px", md: "400px" },
              }}
              component="img"
              src={Brand}
            ></Box>
          </Box>
          <Box sx={{ maxWidth: "100%" }}>
            <Typography
              variant="h1"
              sx={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              PriceHunt – UK Grocery Price Checker
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontSize: "16px",
                marginTop: "20px",
                width: "500px",
                maxWidth: "100%",

                textAlign: "left",
                color: "white",
                lineHeight: "1.5",
              }}
            >
              Stop hopping from tab to tab: Grocery Price Checker pulls live
              prices from Tesco, ASDA, Sainsbury’s, Lidl, Waitrose and other
              major grocers and shows you—instantly—where each item in your
              basket is cheapest. Search any product, filter by brand,
              price-per-kg or current discounts, then build a smart shopping
              list that tells you the lowest-cost way to fill your trolley. Set
              drop alerts for favourites and get a heads-up the moment a deal
              appears.
            </Typography>
            <Box sx={{ textAlign: { sm: "center", md: "left" } }}>
              <Button
                variant="contained"
                textAlign="left"
                sx={{
                  marginTop: "30px",

                  bgcolor: "#F9FAFB",
                  color: "initial",
                  borderRadius: "10px",
                  border: "1px solid white",
                  "&:hover": {
                    bgcolor: "#F9FAFB",
                    color: "transparent",
                    border: "1px solid white",
                  },
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default AboutUs;
