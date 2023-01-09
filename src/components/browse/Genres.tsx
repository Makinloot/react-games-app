import { IGenreResults } from "../../api";

const Genres: React.FC<{ data: IGenreResults[] }> = ({
  data,
}): any => {
  console.log(data);

  if (data) {
    const filteredGenres = data.filter((item) => item.name !== 'Platformer' && item.name !== "Educational")
    const shuffled = filteredGenres.sort(() => 0.5 - Math.random()); // shuffle results array
    const genresMap = shuffled.map((genre) => {
      let { id, name, slug } = genre;
      if(name === "Board Games") name = "board";
      if(name === "Massively Multiplayer") name = "multiplayer";
      return (
        <a href={`/browse/${slug}/1`} className="genre" key={id}>
          {name}
        </a>
      );
    }).slice(0, 10) // return 10 genre from shuffled results array as jsx element array
    return (
      <>
        <h2 className="genre-heading">genres</h2>
        <div className="Browse-genres flex-row">{genresMap}</div>
      </>
    )
  }

  return null;
};

export default Genres;
