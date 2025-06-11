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
import { useForm } from "react-hook-form";
import { StarRounded, StarBorderRounded } from "@mui/icons-material";
import { useState } from "react";

const OveralRating = ({ averageRating }) => {
  const [leaveCommentIsOpen, setLeaveCommentIsOpen] = useState(false);
  const [currentUser] = useState(() => {
    const savedUser = localStorage.getItem("currentUser");
    try {
      return savedUser ? JSON.parse(savedUser) : null;
    } catch (error) {
      console.error("Error parsing currentUser from localStorage:", error);
      return null;
    }
  });

  const { register } = useForm({
    values: {
      name: currentUser?.name,
      surname: currentUser?.surname,
      get fullName() {
        return `${this.name} ${this.surname}`;
      },
    },
  });

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
            <Rating
              precision={0.1}
              readOnly
              value={averageRating}
              icon={<StarRounded color="green"></StarRounded>}
              emptyIcon={<StarBorderRounded fontSize="inherit" />}
            />
            <Typography variant="body1" color="initial">
              {averageRating} of 5
            </Typography>
          </Box>

          {leaveCommentIsOpen && (
            <Box display="flex" flexDirection="column" gap={2} py={2}>
              <FormControl fullWidth required>
                <FormLabel>Username:</FormLabel>
                {currentUser ? (
                  <TextField
                    disabled
                    {...register("fullName")}
                    id=""
                    label=""
                    size="small"
                    sx={{
                      ".Mui-disabled": {
                        bgcolor: "#D3D3D3",
                        cursor: "pointer",
                      },
                    }}
                    title="You can't change username name"
                  />
                ) : (
                  <TextField id="" label="" size="small" />
                )}
              </FormControl>
              <FormControl fullWidth>
                <FormLabel>Comment:</FormLabel>
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
              <FormControl sx={{ py: 2 }} required>
                <FormLabel>Rating:</FormLabel>
                <Rating
                  icon={<StarRounded color="green"></StarRounded>}
                  emptyIcon={<StarBorderRounded fontSize="inherit" />}
                ></Rating>
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
