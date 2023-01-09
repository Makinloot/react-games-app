import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './css/styles.css'
import { RAWG_KEY } from '../settings.json'

import Header from './components/layout/header/Header'
import Footer from "./components/layout/footer/Footer"

function App() {

  return (
    <Router>
      <div className="App">
        <Header />

        <Footer />
      </div>
    </Router>
  )
}

export default App
