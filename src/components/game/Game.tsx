import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Loading from "../utils/Loading";
import Error from "../utils/Error";
import { IGameData, IScnreenshots, ITrailerResults, IGames } from "../../api";

const Game: React.FC<{ apiKey: string }> = ({ apiKey }): JSX.Element => {
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
  else {
    const dataGames: IGameData = gameData;
    const dataScreenshots: IScnreenshots = screenshotsData;
    const dataTrailers: ITrailerResults = trailersData;
    const dataAdditions: IGames = additionsData;
    const dataSeries: IGames = seriesData;

    return (
      <div className="Game">
        <div className="container">
          <div className="Game-wrapper">
            <h2>saxeli</h2>
          </div>
        </div>
      </div>
    );
  }
};

export default Game;
