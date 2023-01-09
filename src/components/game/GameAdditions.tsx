import { Link } from "react-router-dom";
import { useState } from "react";
import { IGames } from "../../api";

const GameAdditions: React.FC<{ data: IGames }> = ({ data }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <div className="Game-additions" onClick={() => setOpen(!open)}>
        <h3>DLC packs for this game</h3>
        <i className="fa-solid fa-caret-down"></i>
        <div
          className={
            open ? "Game-additions-wrapper active" : "Game-additions-wrapper"
          }
        >
          {data && data.results.map((item) => {
            const { name, id } = item;
            return (
              <Link to={`/game/${id}`} key={id}>{name}</Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GameAdditions;
