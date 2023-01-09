import { IGameData } from "../../api"

const BrowseList: React.FC<{data: IGameData[]}> = ({ data }):JSX.Element | null => {

  if(data) {
    const browseListMap = data.map((game): JSX.Element => {
      const { background_image, name, id, released, genres, platforms } = game;

      return (
        <div className="Browse-games-item" key={id}>
          <div className="Browse-games-img">
            <img src={background_image || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'} alt={name} />
          </div>
          <div className="Browse-games-details flex-col">
            <h4>Information about the game</h4>
            <div className="detail"><strong>name:</strong> {name}</div>
            <div className="detail"><strong>date:</strong> {released.split("-")[0]}</div>
            <div className="detail"><strong>genre:</strong> {genres && genres.map(genre => genre.name).join(', ')}</div>
            <div className="detail"><strong>platforms:</strong> {platforms && platforms.map(platform => platform.platform.name).join(', ')}</div>
          </div>
          <a className="see-more" href={"/game/" + id}>See More...</a>
        </div>
      )
    }).slice(0, 10);

    return (
      <div className="Browse-games flex-col">
        {browseListMap}
      </div>
    )
  }

  return null;
}

export default BrowseList