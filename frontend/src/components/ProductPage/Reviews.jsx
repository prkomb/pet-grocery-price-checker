import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Link,
  Divider,
} from "@mui/material";

function Reviews() {
  return (
    <Card sx={{ width: "50%" }}>
      <CardContent>
        <Typography
          variant="body1"
          color="initial"
          sx={{ color: "#000", fontFamily: "Poppins" }}
        >
          Reviews
        </Typography>
        <Box p={2} rowGap={4}>
          <Typography variant="body1" color="initial">
            Rate this Item and tell others what you think
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Rating></Rating>
            <Link component="a" href="#" sx={{ fontSize: "12px" }}>
              Write A Review
            </Link>
          </Box>
        </Box>
        <Divider></Divider>
        <Box></Box>
      </CardContent>
    </Card>
  );
}

export default Reviews;
