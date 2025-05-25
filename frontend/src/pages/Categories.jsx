import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Icon,
} from "@mui/material";
import { useState } from "react";
import { KeyboardBackspace } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const [categories] = useState([
    {
      title: "Organic & Special Diet",
      description:
        "Organic, gluten-free and vegan items—tailored deals for any diet.",
      icon: "🌱", // Replace with your actual icon/image path
      key: "organic",
    },
    {
      title: "Meat & Poultry",
      description:
        "Daily deals on chicken, turkey, beef, pork and ground meat.",
      icon: "🥩",
      key: "meat",
    },
    {
      title: "Beverages",
      description:
        "Juices, sodas, water, coffee and tea—filter by cost per litre.",
      icon: "🧃",
      key: "beverages",
    },
    {
      title: "Dairy & Eggs",
      description: "Compare prices on milk, yogurt, cheese, butter and eggs.",
      icon: "🧀",
      key: "dairy",
    },
    {
      title: "Seafood",
      description:
        "Fresh and frozen fish, shrimp, mussels—catch the best price.",
      icon: "🐟",
      key: "seafood",
    },
    {
      title: "Fruits & Vegetables",
      description:
        "Seasonal produce and salad essentials—sorted by price and freshness.",
      icon: "🍎",
      key: "produce",
    },
  ]);

  const topProducts = useSelector((state) => state.dummyJson.products).slice(
    0,
    7
  );
  console.log(topProducts);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={(theme) => ({
        height: { xs: "100%", md: "100vh" },

        backgroundImage: `linear-gradient(${theme.palette.brandColor.royalBlue}, ${theme.palette.brandColor.teal})`,
      })}
    >
      <Box
        sx={{
          width: "50%",
          maxWidth: "100%",
          height: "100dvh",
          maxHeight: "100vh",
        }}
      >
        <Typography
          variant="body1"
          textAlign="center"
          gap={2}
          sx={{ fontFamily: "Poppins", fontWeight: "bold" }}
          mt={3}
        >
          <Typography
            component="span"
            variant="body1"
            mr={1}
            sx={(theme) => ({
              color: theme.palette.BrandTitle.mainColor,
            })}
          >
            PriceHunt
          </Typography>
          Categories
        </Typography>
        <Box
          mt={2}
          sx={{
            border: "1px solid #FFFFFF",
            borderRadius: "12px",
            overflowY: "scroll",
            height: "575px",
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none", // Chrome, Safari, Edge
            },
          }}
          p={2}
          mb={2}
          mx={2}
          gap={3}
          display="flex"
          flexWrap="wrap"
          flexBasis={3}
          justifyContent="space-evenly"
        >
          {topProducts.map((category) => {
            return (
              <Card
                component={NavLink}
                to="/category"
                key={category.title}
                sx={{
                  width: "189px",
                  borderRadius: "8px",
                  transition: ".5s linear",

                  "&:hover": {
                    bgcolor: "#34D399",
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
                    color: "white",
                  },
                }}
              >
                <CardMedia title={category.title}>
                  <Box textAlign="center" fontSize={40}>
                    {category.icon}
                  </Box>
                </CardMedia>
                <CardContent>
                  <Typography
                    variant="body1"
                    color="initial"
                    textAlign="center"
                    sx={{
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      fontSize: "10px",
                      textTransform: "capitalize",
                    }}
                  >
                    {category.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: "10px",
                      fontFamily: "Poppins",
                      fontSize: "10px",
                      textAlign: "center",
                    }}
                  >
                    {category.description}
                  </Typography>
                </CardContent>
              </Card>
            );
          })}
        </Box>
        <Box textAlign="center" mt={4}>
          <Button
            component={NavLink}
            to="/home"
            startIcon={<KeyboardBackspace />}
            variant="contained"
            fullWidth
            sx={(theme) => ({
              color: "black",
              bgcolor: `${theme.palette.BrandTitle.mainColor}`,
            })}
          >
            Back Home
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Categories;
