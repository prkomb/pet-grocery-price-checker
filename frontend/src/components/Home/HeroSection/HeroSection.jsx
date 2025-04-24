import {
  Box,
  Typography,
  InputAdornment,
  Container,
  OutlinedInput,
  IconButton,
  Button,
} from "@mui/material";
import Star from "@/assets/images/Star.svg";
import BigStar from "@/assets/images/BigStar.svg";
import { Search } from "@mui/icons-material";
import "./HeroSection.css";
import LeftStartsPair from "./HeroStars/LeftPair";
import RightStartsPair from "./HeroStars/RigtPair";

const HeroSection = () => {
  return (
    <Box
      component="section"
      className="hero-section h-[452px]"
      display="flex"
      alignItems="center"
      sx={{ margin: "15px 20px", borderRadius: "16px", position: "relative" }}
    >
      <LeftStartsPair></LeftStartsPair>
      <RightStartsPair></RightStartsPair>

      <Container sx={{ width: "780px", maxWidth: "100%" }}>
        <Box sx={{ width: "759px", maxWidth: "100%" }}>
          <Typography
            className="sm: text-2xl"
            sx={{
              textAlign: "center",
              fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "56px" },

              // fontSize: "56px",
              fontFamily: "Poppins",
              fontWeight: 600,
              fontStyle: "italic",
            }}
          >
            Find the Best Grocery Prices in Your Area
          </Typography>
        </Box>

        <Box className="text-center">
          <OutlinedInput
            className="bg-white w-[572px] h-[76px] max-w-[100%]"
            sx={{
              borderRadius: "24px",
              marginX: "8px",
              marginTop: "79px",
            }}
            placeholder="Search for a product (e.g., Milk, Bread)"
            startAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <Search></Search>
                </IconButton>
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <Button
                  variant="outlined"
                  sx={{
                    paddingX: "35px",
                    paddingY: "15px",
                    borderRadius: "16px",
                    backgroundColor: "#00FF84",
                    border: "none",
                    textTransform: "capitalize",
                    fontFamily: "Pacifico",
                    fontSize: "18px",
                  }}
                >
                  Search
                </Button>
              </InputAdornment>
            }
          ></OutlinedInput>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
