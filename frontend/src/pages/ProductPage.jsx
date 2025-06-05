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
      <Box display="flex" alignItems="center" gap={3} sx={{ padding: "20px" }}>
        <Card sx={{ width: 300 }}>
          <CardMedia
            component="img"
            image={currentProduct?.image}
            alt="Whole chicken"
            sx={{ borderRadius: 2 }}
          />
        </Card>
        <Stack rowGap={1}>
          <Box alignSelf="start">
            <Box
              sx={{
                width: "687px",
                p: 2,
                borderRadius: "10px",
                bgcolor: "#E5E7EB",
                transition: "all .3s linear",
                "&:hover": {
                  bgcolor: "#fff",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  pb: 2,

                  fontFamily: "Poppins",
                  fontSize: "20px",
                  fontWeight: "bold",
                }}
              >
                {currentProduct?.title}
              </Typography>

              <Box
                display="flex"
                alignItems="center"
                gap={2}
                sx={{
                  pb: 2,
                }}
              >
                <Button
                  sx={{
                    bgcolor: "#34D399",
                    textTransform: "capitalize",
                    borderRadius: "20px",
                    fontSize: "10px",
                    color: "#000",
                  }}
                >
                  Delivery
                </Button>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "italic",
                  }}
                >
                  {currentProduct?.shippingInformation}
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" gap={2}>
                <Typography variant="body1" color="initial">
                  £{currentProduct?.price}
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
                  £{currentProduct?.price}
                </Typography>
              </Stack>
            </Box>
          </Box>
          <Box alignSelf="start">
            <Box
              sx={{
                width: "687px",
                p: 2,
                borderRadius: "10px",
                bgcolor: "#E5E7EB",
                transition: "all .3s linear",
                "&:hover": {
                  bgcolor: "#fff",
                  boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.5)",
                },
              }}
            >
              <Typography
                variant="body1"
                color="initial"
                sx={{
                  pb: 2,
                  fontFamily: "Inter",
                  color: "#34D399",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                {currentProduct?.availabilityStatus}: {currentProduct?.stock}
              </Typography>

              <Box display="flex" alignItems="center" gap={2} sx={{ pb: 2 }}>
                <Button
                  sx={{
                    bgcolor: "#34D399",
                    textTransform: "capitalize",
                    borderRadius: "20px",
                    fontSize: "10px",
                    color: "#000",
                  }}
                >
                  Delivery
                </Button>
                <Typography
                  variant="body1"
                  color="initial"
                  sx={{
                    fontFamily: "Inter",
                    fontStyle: "italic",
                  }}
                >
                  {currentProduct?.shippingInformation}
                </Typography>
              </Box>
              <Stack direction="row" alignItems="center" gap={2}>
                <Typography variant="body1" color="initial">
                  £{currentProduct?.price}
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
                  £{currentProduct?.price}
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
};

export default ProductPage;
