import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

const ProductCard = (props) => {
  return (
    <Card
      sx={{
        width: 300,
        display: "flex",
        flexDirection: "column",
        height: "400px",
      }}
    >
      <CardMedia component="img" src={props.image}></CardMedia>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle2" color="initial">
          {props.title}
        </Typography>
        <Typography variant="subtitle2" color="initial">
          {props.price}
        </Typography>
      </CardContent>
      <CardActions sx={{ textAlign: "center" }}>
        <Button
          fullWidth
          sx={{
            transition: "all .3s linear easy",

            "&:hover": { bgcolor: "#34D399", color: "white" },
          }}
        >
          Open and Review
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
