const Search = () => {

  return (
    <form className="Header-search flex-row">
      <input type="text" required />
      <button className="flex-row">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
      <div className="search-results flex-col">
      </div>
    </form>
  );
};

export default Search;