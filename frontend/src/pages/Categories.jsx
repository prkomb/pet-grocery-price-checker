import {
  Box,
  Card,
  Typography,
  CardContent,
  CardMedia,
  Button,
  Icon,
} from "@mui/material";
import { KeyboardBackspace } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Categories = () => {
  const topProducts = useSelector(
    (state) => state.dummyJson?.products?.productCategories
  )?.slice(0, 6);

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
            height: "475px",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
          p={2}
          mb={2}
          mx={2}
          gap={10}
          display="flex"
          flexWrap="wrap"
          flexBasis={3}
          justifyContent="space-evenly"
          alignItems="center"
        >
          {topProducts?.map((category) => {
            return (
              <Card
                component={NavLink}
                to="/category"
                key={category.title}
                sx={{
                  width: "170px",
                  height: "170px",
                  textAlign: "center",
                  backgroundColor: "#E5E7EB",
                  borderRadius: "16px",
                  transition: "all 2s linear ease",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "white",
                    boxShadow: "0px 0px 19px 4px rgba(0,0,0,0.75)",
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
