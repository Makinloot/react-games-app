import useFetch from "../../hooks/useFetch";

import Hero from "./Hero";
import Slider from "./Slider";
import Loading from "../utils/Loading";
import Error from "../utils/Error";

const Home = ({ apiKey }: { apiKey: string }): JSX.Element => {
  const randomNumber: number = Math.floor(Math.random() * 10) + 1; // generate random number up to 10
  const heroUrl: string = `https://api.rawg.io/api/games?key=${apiKey}&page=${randomNumber}&page_size=20&metacritic=70,100&dates=2019-01-01,2020-12-31.2021-01-01,2022-12-31&exclude_additions=true`;
  const sliderUrl: string = `https://api.rawg.io/api/games?key=${apiKey}&page=${randomNumber}&page_size=20&metacritic=70,100&dates=2019-01-01,2020-12-31.2021-01-01,2022-12-31&exclude_additions=true`;
  const [heroData, error, loading] = useFetch(heroUrl);
  const [sliderData, sliderError, sliderLoading] = useFetch(sliderUrl);

  if (loading || sliderLoading) return <Loading />;
  else if (error || sliderError) return <Error />;
  else {
    return (
      <div className="Home">
        <Hero data={heroData} />
        <Slider data={sliderData} />
      </div>
    );
  }
};

export default Home;
