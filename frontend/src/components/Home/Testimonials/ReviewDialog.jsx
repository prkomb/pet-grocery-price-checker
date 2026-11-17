import { useState } from "react";
import axios from "axios";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Rating,
  TextField,
  Typography,
} from "@mui/material";

const empty = { name: "", location: "", quote: "", rating: 5 };

const ReviewDialog = ({ open, onClose }) => {
  const [form, setForm] = useState(empty);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (field) => (event) =>
    setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleClose = () => {
    onClose();
    setError("");
    setSuccess("");
    setForm(empty);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      const { data } = await axios.post("/api/testimonials", form);
      setSuccess(data.message);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ fontFamily: "Poppins", fontWeight: 600 }}>
          Leave a review
        </DialogTitle>
        <DialogContent>
          {success ? (
            <Alert severity="success">{success}</Alert>
          ) : (
            <Box display="flex" flexDirection="column" gap={2} pt={1}>
              {error && <Alert severity="error">{error}</Alert>}
              <TextField
                label="Name"
                value={form.name}
                onChange={handleChange("name")}
                required
                inputProps={{ maxLength: 50 }}
              />
              <TextField
                label="Location (e.g. London, England)"
                value={form.location}
                onChange={handleChange("location")}
                inputProps={{ maxLength: 60 }}
              />
              <Box>
                <Typography variant="body2">Rating</Typography>
                <Rating
                  value={form.rating}
                  onChange={(_, value) =>
                    setForm((prev) => ({ ...prev, rating: value ?? prev.rating }))
                  }
                  sx={{ color: "#FFD700" }}
                />
              </Box>
              <TextField
                label="Your review"
                value={form.quote}
                onChange={handleChange("quote")}
                required
                multiline
                minRows={3}
                inputProps={{ maxLength: 300 }}
                helperText={`${form.quote.length}/300 (min 10)`}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, pb: 2 }}>
          <Button onClick={handleClose}>{success ? "Close" : "Cancel"}</Button>
          {!success && (
            <Button type="submit" variant="contained" disabled={loading}>
              {loading ? "Sending..." : "Submit"}
            </Button>
          )}
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default ReviewDialog;
