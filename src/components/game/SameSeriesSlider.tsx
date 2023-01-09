import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// types
import { IGames } from "../../api";

const SameSeriesSlider: React.FC<{ data: IGames }> = ({ data }) => {
  return (
    <>
      <strong className="Series-title">Games from same series</strong>
      <div className="Series-slider">
        {(data && data.results) && data.results.length > 0 ? (
          <Swiper
            slidesPerView={1.5}
            spaceBetween={10}
            freeMode={true}
            modules={[FreeMode, Pagination]}
            className="mySwiper Series-swiper"
            breakpoints={{
              900: {
                width: 900,
                slidesPerView: 5.85
              },
              700: {
                width: 700,
                slidesPerView: 4
              },
              480: {
                width: 480,
                slidesPerView: 2
              }
            }}
          >
            {(data && data.results) && data.results.map((slide, i) => {
              const { background_image, name, id } = slide;
              return (
                <SwiperSlide className="slide" key={id}>
                  <Link to={"/game/" + id} title={name}>
                    <div className="img-container">
                      <img src={background_image} alt={name} />
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : null}
      </div>
    </>
  );
};

export default SameSeriesSlider;
