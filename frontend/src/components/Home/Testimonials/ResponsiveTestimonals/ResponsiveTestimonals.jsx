import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IconButton } from "@mui/material";
import { Start } from "@mui/icons-material";

const ResponseTestimonals = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        effect="fade"
        keyboard={{ enabled: true, pageUpDown: true }}
        speed={1000}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div className=" max-w m-auto h-60 border w-1/2 bg-red-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w w-1/2 m-auto h-60 border bg-green-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w w-1/2 m-auto h-60 border"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w w-1/2 m-auto h-60 border"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-w w-1/2 m-auto h-60 border"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ResponseTestimonals;
