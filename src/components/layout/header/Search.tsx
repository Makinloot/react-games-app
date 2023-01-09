import { useState, FormEvent } from "react";
import { useFetch } from "../../../hooks/useFetch";
type TSearchValue = string | number | null;

const Search: React.FC<{ apiKey: string }> = ({ apiKey }) => {
  const [searchValue, setSearchValue] = useState<TSearchValue>(null);
  const [searchResults, setSearchResults] = useState<[]>([]);
  // const [searchResults] = useFetch(url);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `/search/${searchValue}/1`;
  };

  const handleChange = (e: HTMLInputElement | any) => {
    setSearchValue(e.target.value);
    fetchSearch(e.target.value);
  };

  const fetchSearch = async (value: string) => {
    const url = `https://api.rawg.io/api/games?key=${apiKey}&search=${value || 'stringThatPreventsDispalyingResultsWhileSearchIsEmpty'}&search_exact=true&exclude_additions=true&ordering=metacritic=50,100&page=1&page_size=10&metacritic=50,100`;
    const res = await fetch(url);
    const data = await res.json();
    const { results } = data;
    setSearchResults(results);
  };

  return (
    <form className="Header-search flex-row" onSubmit={handleSubmit}>
      <input type="text" required onChange={handleChange} />
      <button className="flex-row">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <div className="search-results flex-col">
      {searchResults && searchResults.length > 0
        ? searchResults
          .map(
              (result: {
                name: string;
                background_image: string;
                id: number;
              }) => {
                const { name, background_image, id } = result;
                return (
                  <a href={`/game/${id}`} className="result" key={id}>
                    <img src={background_image} alt={name} />
                    <h4>{name}</h4>
                  </a>
                );
              }
            ).slice(0, 4)
          : 
          null
      }
      </div>
    </form>
  );
};

export default Search;
