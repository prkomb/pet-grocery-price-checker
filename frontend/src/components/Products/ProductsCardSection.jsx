import { Typography, Box, Button } from "@mui/material";
import ProductCard from "./Cards/Card";
import { randomProducts } from "@/data/products.js";

const ProductsCardSection = () => {
  console.log(randomProducts);
  return (
    <>
      <Typography
        variant="body1"
        color="initial"
        textAlign="center"
        sx={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          fontSize: 50,
          margin: "50px 0",
        }}
      >
        Products
      </Typography>

      <Box display="flex" gap={3} flexWrap="wrap" justifyContent="center">
        {randomProducts.map((product) => (
          <ProductCard {...product} />
        ))}
      </Box>

      <Box textAlign="center" margin="50px 0">
        <Button
          sx={{
            bgcolor: "#4CAF50",
            color: "white",
            width: "271px",
            maxWidth: "100%",
            borderRadius: "10px",
          }}
        >
          Load More
        </Button>
      </Box>
    </>
  );
};

export default ProductsCardSection;
