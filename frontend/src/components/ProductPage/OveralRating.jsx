import {
  Card,
  CardContent,
  Typography,
  Box,
  Rating,
  CardActions,
  Button,
  FormControl,
  TextField,
  FormHelperText,
  FormLabel,
  TextareaAutosize,
} from "@mui/material";
import { useState } from "react";

const OveralRating = ({ averageRating }) => {
  const [leaveCommentIsOpen, setLeaveCommentIsOpen] = useState(false);
  return (
    <>
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

          {leaveCommentIsOpen && (
            <Box gap={3}>
              <FormControl fullWidth>
                <FormLabel>Username:</FormLabel>
                <TextField id="" label="" size="small" />
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>Comment</FormLabel>
                <TextareaAutosize
                  minRows={3}
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "0.2px solid grey",
                    borderRadius: "5px",
                  }}
                ></TextareaAutosize>
              </FormControl>
              <FormControl sx={{ py: 2 }}>
                <FormLabel></FormLabel>
                <Rating></Rating>
              </FormControl>
            </Box>
          )}
        </CardContent>
        <CardActions>
          {leaveCommentIsOpen ? (
            <>
              <Button
                onClick={() => setLeaveCommentIsOpen(!leaveCommentIsOpen)}
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#F87171",
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  textTransform: "capitalize",
                }}
              >
                Close Review
              </Button>
              <Button
                onClick={() => setLeaveCommentIsOpen(!leaveCommentIsOpen)}
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#34D399",
                  fontFamily: "Poppins",
                  fontSize: "10px",
                  textTransform: "capitalize",
                }}
              >
                Save Review
              </Button>
            </>
          ) : (
            <Button
              onClick={() => setLeaveCommentIsOpen(!leaveCommentIsOpen)}
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
          )}
        </CardActions>
      </Card>
    </>
  );
};

export default OveralRating;
