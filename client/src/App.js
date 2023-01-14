import { Route, Routes } from "react-router-dom";
import './assets/css/App.css'
import Navigation from './components/Navigation';
// import About from './pages/About';
// import Contact from './pages/Contact';
import Home from './pages/Home';
// import Packages from './pages/Packages';
// import Venue from './pages/Venue';
// import Gallery from "./pages/Gallery";
// import Footer from "./pages/Footer";
import { Nav } from "react-bootstrap";

function App() {
  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route path="/" element={< Home />}></Route>
        {/* <Route path="/venue" element={< Venue />}></Route>
        <Route path="/packages" element={< Packages />}></Route>
        <Route path="/about" element={< About />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
        <Route path="/gallery" element={< Gallery />}></Route> */}
      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
