
import './App.css';

import { Routes, Route } from "react-router-dom";
import Home from './Component/Views/Home';
import About from './Component/Views/About';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Routes>
  <Footer/>
    </div>
  );
}

export default App;
