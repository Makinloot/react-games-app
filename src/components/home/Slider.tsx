import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
// types
import { IGameData, IGames } from "../../api";

const Slider: React.FC<{ data: IGames | null }> = ({
  data,
}): JSX.Element | null => {
  const { width } = document.body.getBoundingClientRect();

  if (data) {

    return (
      <section className="Slider">
        <div className="container">
          <strong className="Slider-title">Gandom Games</strong>
          <div className="Slider-wrapper">
            <Swiper
              slidesPerView={1.2}
              spaceBetween={10}
              freeMode={true}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
              breakpoints={{
                1200: {
                  width: 1200,
                  slidesPerView: 5.2
                },
                1000: {
                  width: 1000,
                  slidesPerView: 5
                },
                650: {
                  width: 650,
                  slidesPerView: 3
                }
              }}
            >
              {data.results && freeModeSlider(data.results)}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

function freeModeSlider(data: IGameData[]) {
  const shuffled = data.sort(() => 0.5 - Math.random());
  const slides = shuffled.map((slide) => {
    const { background_image, id, name, rating, ratings_count, genres } = slide;
    return (
      <SwiperSlide className="Slider-slide" id={JSON.stringify(id)} key={id}>
        <Link to={`/game/${id}`}>
          <div className="Slider-img">
            <img src={background_image} alt={name} />
          </div>
          <div className="Slider-text flex-col">
            <h4>{name}</h4>
            <strong>
              {genres
                .map((genre: { name: string }) => genre.name)
                .slice(0, 2)
                .join(", ")}
            </strong>

            <p>
              ratings: {rating} {`(${ratings_count})`}
            </p>
          </div>
          <input type="hidden" value={id} />
        </Link>
      </SwiperSlide>
    );
  }).slice(0, 10);
  return slides;
}

export default Slider;
