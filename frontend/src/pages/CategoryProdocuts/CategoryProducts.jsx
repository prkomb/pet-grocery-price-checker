import { Box, Container, Typography, Stack } from "@mui/material";
import ProductCard from "./Cards";
import { useState } from "react";
import { useSelector } from "react-redux";

const CategoryProducts = () => {
  const products = useSelector((state) => state.products.categoryProducts);

  return (
    <Container>
      <Box>
        <Box>
          <Typography variant="body1" color="initial">
            Products List ({products.length})
          </Typography>
        </Box>
        <Stack direction="row" gap={2}>
          {products.map((product) => (
            <ProductCard
              price={product.price}
              title={product.description}
              image={product.image}
            ></ProductCard>
          ))}
        </Stack>
      </Box>
    </Container>
  );
};

export default CategoryProducts;
