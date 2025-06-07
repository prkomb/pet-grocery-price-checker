import { Box, Typography } from "@mui/material";

const ProductDescriptions = () => {
  return (
    <Box>
      <Typography
        variant="body1"
        color="initial"
        sx={{ fontFamily: "Poppins", fontSize: "10px", fontWeight: "bold" }}
      >
        Category
      </Typography>
      <Typography
        variant="body1"
        color="initial"
        sx={{
          mx: "20px",
          my: "10px",
          textTransform: "capitalize",
          fontWeight: "300",
          fontSize: "10px",
          fontFamily: "Poppins",
        }}
      >
        {currentProduct?.category}
      </Typography>
    </Box>
  );
};
