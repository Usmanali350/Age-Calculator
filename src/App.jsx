import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";  
import './App.css';
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* The Navbar should be outside the Routes so it is visible on all pages */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
