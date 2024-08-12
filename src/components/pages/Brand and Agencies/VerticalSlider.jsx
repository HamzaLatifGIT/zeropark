import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; // Import Pagination module
// import 'swiper/swiper-bundle.min.css';
import './style/VerticalSlider.scss';

const VerticalSlider = () => {
  return (
    <div className="slider-container">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={0}
        mousewheel={true}
        loop={true}
        pagination={{
          clickable: true,
          el: '.swiper-pagination',
        }}
        modules={[Pagination]} // Include the Pagination module here
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide-content">
            <img src="/images/image1.png" alt="Image 1" />
            <div className="slide-text">Text for Image 1</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="/images/image2.png" alt="Image 2" />
            <div className="slide-text">Text for Image 2</div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
            <img src="/images/image3.png" alt="Image 3" />
            <div className="slide-text">Text for Image 3</div>
          </div>
        </SwiperSlide>
        {/* Add more slides as needed */}
      </Swiper>

      {/* Pagination element */}
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default VerticalSlider;
