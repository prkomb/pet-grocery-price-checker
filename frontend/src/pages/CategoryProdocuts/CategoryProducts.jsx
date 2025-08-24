import { Box, Container, Typography, Stack, Button } from "@mui/material";
import ProductCard from "./Cards";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import sortedProducts from "../../utils/sortProducts";
import { maxSortProducts } from "../../utils/sortProducts";

const CategoryProducts = () => {
  const products = useSelector((state) => state?.products?.categoryProducts);
  const [items, setItems] = useState(products);

  useEffect(() => {
    if (products && products.length > 0) {
      setItems(products);
    }
  }, [products]);

  const sortProducts = () => {
    if (products && products.length > 0) {
      const sorted = sortedProducts(products);
      setItems(sorted);
      console.log(items);
    }
  };

  const highSortProducts = () => {
    if (products && products.length > 0) {
      const sorted = maxSortProducts(products);
      setItems(sorted);
      console.log(items);
    }
  };

  return (
    <Container>
      <Box>
        <Box>
          <Typography variant="body1" color="initial">
            Products List ({products.length})
          </Typography>
        </Box>
        <Box>
          <Button onClick={() => sortProducts()}>Price: High to Low</Button>
          <Button onClick={() => highSortProducts()}>Price: Low to High</Button>
        </Box>

        <Stack direction="row" gap={2}>
          {items?.map((product) => (
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
