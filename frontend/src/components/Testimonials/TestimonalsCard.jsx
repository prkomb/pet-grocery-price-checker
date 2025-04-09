import {
  Card,
  CardContent,
  Avatar,
  Box,
  Typography,
  Rating,
} from "@mui/material";
// import {} from "@mui/";

function TestimonalsCard({ name, location, rating, quote }) {
  return (
    <>
      <Card sx={{ width: "300px", padding: "24px" }}>
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            sx={{ marginBottom: "10px" }}
          >
            <Avatar sx={{ textAlign: "center" }}></Avatar>
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
