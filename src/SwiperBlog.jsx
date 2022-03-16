import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Blog from './Blog';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";




function SwiperBlog() {
    const blog = {
        blog1: {
          img: image1,
          text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2: "5 мин",
          text3: "5 мин",
          text4: "5 мин",
        },
        blog2: {
          img: image2,
          text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2: "5 мин",
          text3: "5 мин",
          text4: "5 мин",
        },
        blog3: {
          img: image3,
          text1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          text2: "5 мин",
          text3: "5 мин",
          text4: "5 мин",
        },
      };
    return (
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={530}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><Blog info={blog.blog1} /></SwiperSlide>
        <SwiperSlide><Blog info={blog.blog2} /></SwiperSlide>
        <SwiperSlide><Blog info={blog.blog3} /></SwiperSlide>
      </Swiper>
    );
  };
  
  export default SwiperBlog;