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
import { StarRounded, StarBorderRounded } from "@mui/icons-material";

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
            flexWrap="wrap"
            gap={2}
            sx={{ py: "20px" }}
          >
            <Rating
              icon={<StarRounded color="green"></StarRounded>}
              emptyIcon={<StarBorderRounded fontSize="inherit" />}
            ></Rating>
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
                      src="https://i.pravatar.cc/300"
                      aria-label={review.reviewerName}
                    />
                  }
                  title={
                    <Typography variant="subtitle1" fontWeight="bold">
                      {review.reviewerName}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body2" color="text.secondary">
                      {formatReviewData(review.date)}
                    </Typography>
                  }
                  action={
                    <Rating
                      readOnly
                      value={review.rating}
                      precision={0.1}
                      icon={<StarRounded />}
                      emptyIcon={<StarBorderRounded fontSize="inherit" />}
                      sx={{
                        mt: { xs: 1, sm: 0 },
                        alignSelf: { xs: "flex-start", sm: "center" },
                      }}
                    />
                  }
                  sx={{
                    flexDirection: { xs: "column", sm: "row" },
                    alignItems: { xs: "flex-start", sm: "center" },
                    gap: 1,
                  }}
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
