import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  Rating,
} from "@mui/material";

function TestimonalsCard({ name, location, rating, quote, image }) {
  return (
    <>
      <Card
        sx={{
          width: "100%",
          maxWidth: 350,
          background: "#fff",
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          borderRadius: 3,

          p: 3,
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
          },
        }}
      >
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginBottom: "10px" }}
          >
            <Avatar sx={{ textAlign: "center" }} src={image}></Avatar>
          </Box>

          <Box>
            <Typography
              variant="body1"
              color="initial"
              textAlign="center"
              sx={{ fontFamily: "Poppins" }}
            >
              {name}
            </Typography>
            <Typography
              variant="body1"
              color="initial"
              textAlign="center"
              sx={{ fontFamily: "Poppins" }}
            >
              {location}
            </Typography>
            <Box textAlign="center">
              <Rating
                defaultValue={rating}
                readOnly
                max={rating}
                sx={{ color: "#FFD700" }}
              ></Rating>
            </Box>

            <Typography
              variant="body1"
              color="initial"
              textAlign="center"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              "{quote}"
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}

export default TestimonalsCard;
