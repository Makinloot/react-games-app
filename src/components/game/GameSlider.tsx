import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import { ITrailers, IScreenResults } from "../../api";

const GameSlider: React.FC<{
  trailerData: ITrailers;
  sliderData: IScreenResults[];
}> = ({ trailerData, sliderData }) => {

  const uniqueKey = (): number => {
    return Math.random() * Math.random() * Math.random();
  };

  return (
    <div className="Game-slider">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={50}
        className="mySwiper"
      >
        {trailerData &&
          trailerData.results.map((video) => {
            const { preview } = video;
            const { max } = video.data;
            return (
              <SwiperSlide key={uniqueKey()}>
                <video controls poster={preview}>
                  <source src={max} type="video/mp4" />
                </video>
              </SwiperSlide>
            );
          })}
        {sliderData &&
          sliderData.map((result: { image: string }) => {
            const { image } = result;
            return (
              <SwiperSlide key={uniqueKey()}>
                <img src={image} />
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default GameSlider;
