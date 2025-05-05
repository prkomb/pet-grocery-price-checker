import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
} from "swiper/modules";
import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function App() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Keyboard]}
      keyboard={{ enabled: true, pageUpDown: true }}
      navigation={{ enabled: true }}
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("Hello")}
    >
      <SwiperSlide>1</SwiperSlide>
      <SwiperSlide>2</SwiperSlide>
      <SwiperSlide>3</SwiperSlide>
      <SwiperSlide>4</SwiperSlide>
      <SwiperSlide>5</SwiperSlide>
      <SwiperSlide>6</SwiperSlide>
      <SwiperSlide>7</SwiperSlide>
    </Swiper>
  );
}

export default App;
