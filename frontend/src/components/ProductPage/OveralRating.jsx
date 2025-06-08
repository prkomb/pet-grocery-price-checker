import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  CardActions,
  Button,
} from "@mui/material";

const OveralRating = ({ averageRating }) => {
  return (
    <Card>
      <CardContent>
        <Typography
          variant="body1"
          color="initial"
          sx={{
            fontFamily: "Poppins",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Reviews and Ratings
        </Typography>

        <Box display="flex" justifyContent="space-between" mt={3}>
          <Rating precision={0.1} readOnly value={averageRating} />
          <Typography variant="body1" color="initial">
            {averageRating} of 5
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#34D399",
            fontFamily: "Poppins",
            fontSize: "10px",
            textTransform: "capitalize",
          }}
        >
          Add Review
        </Button>
      </CardActions>
    </Card>
  );
};

export default OveralRating;
