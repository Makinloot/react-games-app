import { useState } from "react";
import { Link } from "react-router-dom";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper";
// swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// types
import { IGames, IGameData } from "../../api";

const Hero: React.FC<{ data: IGames | null }> = ({
  data,
}): JSX.Element | null => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  if (data) {
    const { results } = data;
    const shuffled = results.sort(() => 0.5 - Math.random()); // shuffle results array
    const selected = shuffled.slice(0, 5); // select first 5 elements from shuffled results array

    return (
      <section className="Hero">
        <div className="container">
          <strong className="Hero-title">Popular games</strong>
          <div className="Hero-wrapper">
            <Swiper
              spaceBetween={10}
              thumbs={{
                swiper:
                  thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
              }}
              modules={[Thumbs]}
              touchRatio={0}
              className="mySwiper2 Hero-primary"
            >
              {thumbnailSlider(selected)}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              touchRatio={0}
              className="mySwiper Hero-secondary"
            >
              {thumbnailThumbs(selected)}
            </Swiper>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

// return array of thumbnail slider elements
function thumbnailSlider(data: IGameData[]) {
  const sliders = data.map((slide) => {
    const { background_image, name, id } = slide;
    return (
      <SwiperSlide
        key={id}
        style={{ backgroundImage: `url(${background_image})` }}
      >
        <img src={background_image} alt={name} />
        <h3>{name}</h3>
        <Link className="Hero-primary-link" to={`/game/${id}`}>
          check out
        </Link>
      </SwiperSlide>
    );
  });
  return sliders;
}

// return array of thumbnail slider thumbs elements
function thumbnailThumbs(data: IGameData[]) {
  const sliders = data.map((slide) => {
    const { background_image, name, id } = slide;
    return (
      <SwiperSlide key={id}>
        <div className="Hero-secondary-slider">
          <div className="slider-img">
            <img src={background_image} alt={name} />
          </div>
          <strong className="slider-text">{name}</strong>
        </div>
      </SwiperSlide>
    );
  });
  return sliders;
}

export default Hero;
