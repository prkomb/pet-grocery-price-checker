import { Card, CardContent, Box, Typography } from "@mui/material";

const CategoryCard = ({ category }) => {
  return (
    <Card
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
      <CardContent className="flex text-center items-center justify-center h-full px-4">
        <Typography
          variant="body1"
          className="text-gray-800 text-center font-medium"
          sx={{
            fontFamily: "Manrope Variable",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          {category}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
