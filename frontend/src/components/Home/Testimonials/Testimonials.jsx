import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Container, Button } from "@mui/material";
import ReviewDialog from "./ReviewDialog";
import TestimonalsCard from "./TestimonalsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";

const Testimonals = () => {
  const [open, setOpen] = useState(false);
  const [fetched, setFetched] = useState([]);

  useEffect(() => {
    axios
      .get("/api/testimonials")
      .then(({ data }) => setFetched(data.testimonials ?? []))
      .catch(() => {});
  }, []);

  const items = fetched;

  return (
    <section aria-labelledby="reviews-title" className="px-4 py-16 sm:px-6">
      <Container maxWidth="lg" disableGutters>
        <div className="text-center">
          <span className="section-eyebrow">Reviews</span>
          <h2 id="reviews-title" className="section-title mt-2">
            What people are saying
          </h2>
        </div>

        {items.length === 0 && (
          <Typography textAlign="center" sx={{ py: 5, color: "text.secondary" }}>
            No reviews yet. Be the first to leave one!
          </Typography>
        )}

        {items.length > 0 && (
        <Swiper
          modules={[Keyboard, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop={items.length > 3}
          grabCursor
          a11y={{ enabled: true }}
          keyboard={{ enabled: true, pageUpDown: true }}
          speed={700}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ padding: "24px 8px 32px" }}
        >
          {items.map((testimonial, index) => (
            <SwiperSlide key={index} style={{ height: "auto" }}>
              <Box display="flex" justifyContent="center" height="100%">
                <TestimonalsCard
                  image={testimonial.image}
                  name={testimonial.name}
                  location={testimonial.location}
                  quote={testimonial.quote}
                  rating={testimonial.rating}
                />
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
        )}

        <Box textAlign="center" pb={3}>
          <Button variant="contained" onClick={() => setOpen(true)}>
            Leave a review
          </Button>
        </Box>
        <ReviewDialog open={open} onClose={() => setOpen(false)} />
      </Container>
    </section>
  );
};

export default Testimonals;
