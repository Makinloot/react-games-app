import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import GameSlider from "./GameSlider";
import GameDetails from "./GameDetails";
import SameSeries from "./SameSeries";
import GameAdditions from "./GameAdditions";
import Loading from "../utils/Loading";
import Error from "../utils/Error";

import { IGameData, IScnreenshots, ITrailers, IGames } from "../../api";
import { useEffect } from "react";

const Game: React.FC<{ apiKey: string }> = ({ apiKey }): JSX.Element | null => {
  const { id } = useParams();
  const url = `https://api.rawg.io/api/games/${id}?key=${apiKey}`;
  const screenshotsUrl = `https://api.rawg.io/api/games/${id}/screenshots?key=${apiKey}`;
  const trailersUrl = `https://api.rawg.io/api/games/${id}/movies?key=${apiKey}`;
  const additionsUrl = `https://api.rawg.io/api/games/${id}/additions?key=${apiKey}`;
  const seriesUrl = `https://api.rawg.io/api/games/${id}/game-series?key=${apiKey}&page_size=20`;
  const [gameData, gameError, gameLoading] = useFetch(url);
  const [screenshotsData] = useFetch(screenshotsUrl);
  const [trailersData] = useFetch(trailersUrl);
  const [additionsData] = useFetch(additionsUrl);
  const [seriesData] = useFetch(seriesUrl);

  if (gameLoading) return <Loading />;
  else if (gameError) return <Error />;
  else if (gameData) {
    const dataGames: IGameData = gameData;
    const dataScreenshots: IScnreenshots = screenshotsData;
    const dataTrailers: ITrailers = trailersData;
    const dataAdditions: IGames = additionsData;
    const dataSeries: IGames = seriesData;

    return (
      <div className="Game">
        <div className="container">
          <div className="Game-wrapper">
            <h2>{dataGames.name}</h2>
            <GameSlider
              trailerData={dataTrailers}
              sliderData={dataScreenshots.results}
            />
            <GameDetails data={dataGames} />
          </div>
          <SameSeries data={dataSeries} />
          {(dataAdditions && dataAdditions.results) && dataAdditions.results.length > 0 ? (
            <GameAdditions data={dataAdditions} />
          ) : null}
        </div>
      </div>
    );
  }

  return null;
};

export default Game;
