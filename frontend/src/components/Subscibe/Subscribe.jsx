import { Box, Typography, Button } from "@mui/material";

const Subscribe = () => {
  return (
    <>
      <Box
        sx={{
          height: "423px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Box
          sx={{
            maxWidth: "1242px",
            width: "100%",
            mx: "auto",
            px: { xs: 4, md: 8 },
            bgcolor: "#1B1F3B",
            borderRadius: "20px",
          }}
        >
          <Box
            sx={{ padding: "64px", boxSizing: "border-box" }}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Poppins",
                fontWeight: "bold",
                color: "white",
                fontSize: "34px",
                width: "507px",
              }}
            >
              Don't miss out on discounts — subscribe to notifications
            </Typography>
            <Button
              variant="contained"
              sx={{
                color: "#000",
                borderRadius: "50px",
                fontFamily: "Poppins",
                fontWeight: "bold",
                bgcolor: "white",
              }}
            >
              Subscribe
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Subscribe;
