import { Card, CardContent, Box, Typography } from "@mui/material";

const CategoryCard = ({ icon, label }) => {
  return (
    <Card
      sx={{
        width: "170px",
        height: "170px",

        backgroundColor: "#E5E7EB",
        borderRadius: "16px",
      }}
    >
      <CardContent className="flex flex-col justify-between items-center h-full text-center px-4">
        <Box component="div" className="text-5xl ">
          {icon}
        </Box>

        <Typography
          variant="body1"
          className="text-gray-800 text-center font-medium"
          sx={{ fontFamily: "Manrope Variable", fontWeight: "600" }}
        >
          {label}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
