import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import BrowseList from "./BrowseList";
import Genres from "./Genres";
import Pagination from "../utils/Pagination";
import Error from "../utils/Error";
import Loading from "../utils/Loading";

// types
import { IGames, IGenres } from "../../api";

const BrowseGenres: React.FC<{apiKey: string}> = ({ apiKey }) => {
  const { page, genre } = useParams();
  const url = `https://api.rawg.io/api/games?key=${apiKey}&page=${page}&page_size=10&genres=${genre}&metacritic=80,100&exclude_additions=true&ordering=-updated`;
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
}

export default BrowseGenres