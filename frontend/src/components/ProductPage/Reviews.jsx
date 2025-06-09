import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  Link,
  Divider,
  CardHeader,
  Avatar,
  CardActions,
  Button,
} from "@mui/material";
import formatReviewData from "../../helpers/formatReviewDate";

function Reviews({ reviews }) {
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
        <Box p={2} rowGap={10}>
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
        <Divider sx={{ py: 2 }}></Divider>
        <Box rowGap={3} flexDirection="column" display="flex">
          {reviews?.map((review) => {
            return (
              <Card>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label=""
                      src="https://i.pravatar.cc/300"
                    ></Avatar>
                  }
                  title={review.reviewerName}
                  subheader={formatReviewData(review.date)}
                  action={<Rating readOnly value={review.rating} />}
                />

                <CardContent>
                  <Typography variant="body1" color="initial">
                    {review.comment}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    sx={{
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      textTransform: "capitalize",
                    }}
                  >
                    Reply
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
}

export default Reviews;
