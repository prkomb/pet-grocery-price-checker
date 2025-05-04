import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";

const ProductCard = (props) => {
  const [{ title, price, promo }] = useState(props);
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 600,
        width: 270,
        fontSize: "10px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardMedia
        component="img"
        image={`https://placehold.co/50x50?text=${title}`}
        sx={{
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
          borderRadius: "8px",
        }}
      />
      <CardContent>
        <Typography variant="body1" color="initial">
          {title}
        </Typography>

        <Typography
          variant="body1"
          color="green"
          fontWeight="bold"
          my={2}
          sx={{ fontFamily: "Poppins" }}
        >
          £{price}
        </Typography>
        <Typography
          variant="body1"
          color="gray"
          sx={{ fontFamily: "Poppins", fontWeight: 600 }}
        >
          {promo}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Button
          fullWidth
          sx={{
            bgcolor: "#4CAF50",
            color: "white",
            fontFamily: "Poppins",
            textTransform: "capitalize",
            marginTop: "0 auto",
          }}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
