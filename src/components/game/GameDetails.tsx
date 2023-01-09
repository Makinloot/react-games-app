import { Link } from "react-router-dom";
import { IGameData } from "../../api";

const GameDetails: React.FC<{ data: IGameData }> = ({
  data,
}): JSX.Element | null => {
  const {
    id,
    name,
    background_image,
    reviews_count,
    released,
    publishers,
    developers,
    genres,
    description_raw,
  } = data;
  if (data) {
    return (
      <div className="Game-details flex-col">
        {/* game image */}
        <div className="details-img">
          <img src={background_image} alt={name} />
        </div>
        <div className="details-text flex-col">
          {/* game publishers */}
          <div className="publishers">
            <div className="detail-tag">
              <span className="tag-title">developers: </span>{" "}
              {developers &&
                developers.map((developer) => developer.name).join(", ")}
            </div>
            <div className="detail-tag">
              <span className="tag-title">publishers: </span>{" "}
              {publishers &&
                publishers.map((publisher) => publisher.name).join(", ")}
            </div>
          </div>
          {/* game genres */}
          <div className="genres">
            <div className="detail-tag">
              <span className="tag-title">genres: </span>{" "}
              {genres &&
                genres.map(
                  (genre: {
                    name: string;
                    slug: string;
                    id: number | string;
                  }) => (
                    <Link to={`/browse/${genre.slug}/1`} key={genre.id}>
                      {genre.name} |{" "}
                    </Link>
                  )
                )}
            </div>
          </div>
          {/* game reviews */}
          <div className="reviews">
            <div className="detail-tag">
              {" "}
              <span className="tag-title">all reviews: </span> {reviews_count}
            </div>
            {data.ratings &&
              data.ratings
                .map((rating) => {
                  const { title, percent } = rating;
                  return (
                    <div className="detail-tag" key={id}>
                      <span className="tag-title">mostly: </span> {title}{" "}
                      {percent}%
                    </div>
                  );
                })
                .slice(0, 1)}
          </div>
          {/* game release */}
          <div className="release">
            <div className="detail-tag">
              {" "}
              <span className="tag-title">released: </span> {released}
            </div>
          </div>
          {/* game description */}
          <div className="description">
            <p>{description_raw}</p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default GameDetails;
