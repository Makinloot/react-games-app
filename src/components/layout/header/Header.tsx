import { Link } from "react-router-dom"

import Search from "./Search"
import Burger from "./Burger"

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <div className="Header-wrapper flex-row">
          <nav className="Header-menu">
            <Link to={"/"}>home</Link>
            <Link to={"/browse/1"}>browse</Link>
            <Link to={"/contact"}>contact</Link>
          </nav>
          <Search />
          <Burger />
        </div>
      </div>
    </div>
  )
}

export default Header