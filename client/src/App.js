import { Route, Routes } from "react-router-dom";
import './assets/css/App.css'
import Navigation from './components/Navigation';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Literature from './pages/Literature';
import Technology from './pages/Technology';
import Footer from "./pages/Footer";
import Publications from "./pages/Publications";
import Patents from "./pages/Patents";
import News from "./pages/News";

function App() {
  return (
    <div className="App">

      <Navigation />

      <Routes>
        <Route path="/" element={< Home />}></Route>
        <Route path="/literature" element={< Literature />}></Route>
        <Route path="/technology" element={< Technology />}></Route>
        <Route path="/about" element={< About />}></Route>
        <Route path="/contact" element={< Contact />}></Route>
        <Route path="/publications" element={< Publications />}></Route>
        <Route path="/patents" element={< Patents />}></Route>
        <Route path="/news" element={< News />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
