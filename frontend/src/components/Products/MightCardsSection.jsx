import { Box, Typography } from "@mui/material";
import TopCategories from "../Home/TopCategories/TopCategories";
const MightCardsSection = () => {
  return (
    <>
      <Box marginTop={8}>
        <Typography
          color="initial"
          textAlign="center"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "50px",
          }}
        >
          You might also like
        </Typography>

        <TopCategories></TopCategories>
      </Box>
    </>
  );
};

export default MightCardsSection;
