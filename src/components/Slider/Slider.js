import React, { useRef } from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const Slider = ({
  spaceBetween,
  slidesPerView,
  pagination = false,
  isNavigation,
  navigateArrowColor,
  loop,
  autoplay,
  spaceBetweenDesktop,
  slidesPerViewDesktop,
  slides,
  spaceBetweenTab,
  slidesPerViewTab,
  ItemRender
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = React.useRef(null);

  return (
    <div>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
          spaceBetween={spaceBetween}
          slidesPerView={1}
          pagination={pagination}
          loop={loop}
          autoplay={autoplay}
          breakpoints={{
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40
            },
            "@1.50": {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }}
        >
          {slides?.map((slide, idx) => (
            <SwiperSlide key={idx}>{<ItemRender {...slide} />}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {isNavigation && (
        <div className="flex justify-between absolute z-10 left-4 right-4 top-1/2 cursor-pointer text-gray-dark">
          <div
            ref={prevRef}
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                !!navigateArrowColor
                  ?  navigateArrowColor +" h-8 w-8"
                  : "h-8 w-8"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
              />
            </svg>
          </div>
          <div
            ref={nextRef}
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={
                !!navigateArrowColor
                  ?  navigateArrowColor +" h-8 w-8"
                  : "h-8 w-8"
              }
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slider;
