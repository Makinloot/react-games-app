import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import Loading from "../utils/Loading";
import Error from "../utils/Error";
import SearchError from "../utils/SearchError";
import Pagination from "../utils/Pagination";
// types
import { IGameData, IGames } from "../../api";

const List: React.FC<{ apiKey: string }> = ({ apiKey }): JSX.Element | null => {
  const { name, page } = useParams();
  const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${name}&search_exact=true&exclude_additions=true&page=${page}&page_size=10&ordering=-updated`;
  const [data, error, loading] = useFetch(url);

  if (error) return <SearchError />;
  else if (loading) return <Loading />;
  else if (data) {
    const dataGame: IGames = data;
    const { results, count } = dataGame;
    return (
      <>
        <div className="List">
          <div className="container">
            <div className="List-count">
              {count || 0} results match your search.
            </div>
            <div className="List-wrapper flex-col">
              {results &&
                results.map((result) => {
                  const { name, background_image, released, id } = result;
                  return (
                    <Link
                      to={`/game/${id}`}
                      className="List-item flex-row"
                      key={id}
                    >
                      <div className="list-image">
                        <img src={background_image || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} alt={name} />
                      </div>
                      <div className="list-title">
                        <h3>{name}</h3>
                      </div>
                      <div className="list-date">{released}</div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </div>
        <Pagination count={count} endpoint={`/search/${name}`} />
      </>
    );
  }

  return null;
};

export default List;