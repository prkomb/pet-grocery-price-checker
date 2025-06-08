import { Card, CardMedia } from "@mui/material";

const ProductImage = ({ image }) => {
  return (
    <Card
      sx={{
        width: 300,
        transition: "all 0.3s linear",
        "&:hover": {
          transform: "scale(1.3)",

          zIndex: "1",
        },
      }}
    >
      <CardMedia
        component="img"
        image={image}
        alt="Whole chicken"
        sx={{
          borderRadius: 2,
        }}
      />
    </Card>
  );
};

export default ProductImage;
