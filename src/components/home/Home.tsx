import { useFetch } from "../../hooks/useFetch";

import Hero from "./Hero";
import Slider from "./Slider";
import Loading from "../utils/Loading";
import Error from "../utils/Error";
import { IGames } from "../../api";

const Home: React.FC<{apiKey: string}> = ({ apiKey }): JSX.Element => {
  const heroUrl: string = `https://api.rawg.io/api/games?key=${apiKey}&page=${Math.floor(Math.random() * 10) + 1}&page_size=20&metacritic=70,100&dates=2019-01-01,2020-12-31.2021-01-01,2022-12-31&exclude_additions=true`;
  const sliderUrl: string = `https://api.rawg.io/api/games?key=${apiKey}&page=${Math.floor(Math.random() * 50) + 1}&ordering=-rating&metacritic=70,100&exclude_additions`;
  const [heroData, error, loading] = useFetch(heroUrl);
  const [sliderData, sliderError, sliderLoading] = useFetch(sliderUrl);

  if (loading || sliderLoading) return <Loading />;
  else if (error || sliderError) return <Error />;
  else {
    const heroD: IGames | null = heroData;
    const sliderD: IGames | null = sliderData;
    return (
      <div className="Home">
        <Hero data={heroD} />
        <Slider data={sliderD} />
      </div>
    );
  }
};

export default Home;
