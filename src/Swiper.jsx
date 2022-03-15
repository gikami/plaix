
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import Offers from './Offers';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import frame1 from "./assets/images/frame1.png";
import frame2 from "./assets/images/frame2.png";
import frame3 from "./assets/images/frame3.png";
import frame4 from "./assets/images/frame4.png";
import frame5 from "./assets/images/frame5.png";
import frame6 from "./assets/images/frame6.png";

function Swipe() {
  const offers = {
    offer1: {
      img: frame1
    },
    offer2: {
      img: frame2
    },
    offer3: {
      img: frame3
    },
    offer4: {
      img: frame4
    },
    offer5: {
      img: frame5
    },
    offer6: {
      img: frame6
    },
  }
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={9}
    slidesPerView={6}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
    className="swiper"
    >
      <SwiperSlide><Offers info={offers.offer1} /></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer2} /></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer3} /></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer4}/></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer5}/></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer6}/></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer1}/></SwiperSlide>
      <SwiperSlide><Offers info={offers.offer2}/></SwiperSlide>
    </Swiper>
  );
};

export default Swipe;