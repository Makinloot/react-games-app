import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './css/styles.css'
import { RAWG_KEY } from '../settings.json'

import Header from './components/layout/header/Header'
import Footer from "./components/layout/footer/Footer"
import Home from "./components/home/Home"
import Error from "./components/utils/Error"

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

          <Routes>
            <Route path="/" element={<Home apiKey={RAWG_KEY} />} />
            <Route path="*" element={<Error />} />
          </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App
