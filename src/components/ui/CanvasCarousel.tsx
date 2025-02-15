import { useRef, useEffect } from "react";
import { canvasArray } from "../../config/product-options-config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

type Props = {
  selectedColor: string;
};

const CanvasCarousel = ({ selectedColor }: Props) => {
  const swiperRef = useRef<any>(null);

  const findSlideIndex = (color: string) =>
    canvasArray.findIndex((slide) => slide.color === color);

  useEffect(() => {
    if (selectedColor && swiperRef.current?.swiper) {
      const index = findSlideIndex(selectedColor);
      if (index !== -1) {
        swiperRef.current.swiper.slideTo(index);
      }
    }
  }, [selectedColor]);

  return (
    <div className="w-full h-full flex justify-center items-center cursor-pointer ">
      <Swiper
        className="w-full h-full rounded-sm"
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={12}
        speed={1200}
      >
        {canvasArray.map((slide, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={slide.image}
              alt={`${slide.color} Canvas`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CanvasCarousel;
