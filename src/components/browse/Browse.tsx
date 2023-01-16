import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import BrowseList from "./BrowseList";
import Genres from "./Genres";
import Error from "../utils/Error";
import Loading from "../utils/Loading";
import Pagination from "../utils/Pagination";

import { IGames, IGenres } from "../../api";

const Browse: React.FC<{ apiKey: string }> = ({
  apiKey,
}): JSX.Element | null => {
  const { page } = useParams();
  const url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=10&metacritic=1,100&exclude_additions=true&ordering=-updated`;
  const genresUrl = `https://api.rawg.io/api/genres?key=${apiKey}`;
  const [data, error, loading] = useFetch(url);
  const [genresData] = useFetch(genresUrl);

  if (error) return <Error />;
  else if (loading) return <Loading />;
  else if (data && genresData) {
    const dataBrowse: IGames = data;
    const dataGenres: IGenres = genresData;
    const { count, results } = dataBrowse;
    const genreResults = dataGenres.results;

    return (
      <div className="Browse">
        <div className="container">
          <Genres data={genreResults} />
          <div className="Browse-wrapper">
            <BrowseList data={results} />
          </div>
          <Pagination count={count} endpoint={`/browse`} />
        </div>
      </div>
    );
  }

  return null;
};

export default Browse;
