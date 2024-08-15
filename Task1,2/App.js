
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Menu } from './Components/Menu';
import { Home } from './Components/Home';
import {About} from './Components/About';
import { Services } from './Components/Services';
import { Pricing } from './Components/Pricing';
import { Blog } from './Components/Blog';
import { Pages } from './Components/Pages';
import {Contact} from './Components/Contact';
import { Portfolio } from './Components/Portfolio';
function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
