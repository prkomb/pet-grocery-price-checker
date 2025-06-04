import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Box,
  Stack,
  Container,
  Card,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";

const ProductPage = () => {
  const productPageParams = useParams();

  const currentProduct = useSelector(
    (state) => state.dummyJson?.products?.products
  )?.find((item) => item.id == productPageParams.productId);

  return (
    <Container>
      <Box display="flex" alignItems="center" gap={3}>
        <Card sx={{ width: 300 }}>
          <CardMedia
            component="img"
            image={currentProduct?.image}
            alt="Whole chicken"
            sx={{ borderRadius: 2 }}
          />
        </Card>
        <Box alignSelf="start">
          <Box border="1px solid" sx={{ width: "687px" }}>
            <Typography
              variant="body1"
              color="initial"
              sx={{
                fontFamily: "Poppins",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              {currentProduct.title}
            </Typography>
            <Box display="flex" alignItems="center">
              <Button sx={{ bgcolor: "#34D399" }}>Delivery</Button>
              <Typography variant="body1" color="initial">
                {currentProduct.shippingInformation}
              </Typography>
            </Box>
            <Stack direction="row" alignItems="center" gap={2}>
              <Typography variant="body1" color="initial">
                £{currentProduct.price}
              </Typography>
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  textDecoration: "line-through;",
                  color: "grey",
                  fontSize: "10px",
                }}
              >
                £{currentProduct.price}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductPage;
