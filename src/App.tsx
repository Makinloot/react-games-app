import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./css/styles.css";
import { RAWG_KEY } from "../settings.json";

import Header from "./components/layout/header/Header";
import Footer from "./components/layout/footer/Footer";
import Home from "./components/home/Home";
import Game from "./components/game/Game";
import Error from "./components/utils/Error";
import List from "./components/list/List";
import Browse from "./components/browse/Browse";
import BrowseGenres from "./components/browse/BrowseGenres";

function App() {
  return (
    <Router>
      <div className="App">
        <Header apiKey={RAWG_KEY} />

        <Routes>
          <Route path="/" element={<Home apiKey={RAWG_KEY} />} />
          <Route path="/game/:id" element={<Game apiKey={RAWG_KEY} />} />
          <Route path={`/search/:name/:page`} element={<List apiKey={RAWG_KEY} />} />
          <Route path={`/browse/:page`} element={<Browse apiKey={RAWG_KEY} />} />
          <Route path={`/browse/:genre/:page`} element={<BrowseGenres apiKey={RAWG_KEY} />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
