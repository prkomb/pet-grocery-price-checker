import { Box, Typography, Container } from "@mui/material";
import TestimonalsCard from "./TestimonalsCard";
import testimonials from "./TestimonalsData";

const Testimonals = () => {
  return (
    <Box>
      {/* <Typography></Typography> */}
      <Container maxWidth="lg">
        <Typography
          variant="body1"
          color="initial"
          textAlign="center"
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            color: "#AAAAAA",
          }}
        >
          What are People saying
        </Typography>

        <Box display="flex" justifyContent="center" gap={4} flexWrap="wrap">
          {testimonials.map((testimonial, index) => {
            return (
              <TestimonalsCard
                key={index}
                name={testimonial.name}
                location={testimonial.location}
                quote={testimonial.quote}
                rating={testimonial.rating}
              ></TestimonalsCard>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default Testimonals;
