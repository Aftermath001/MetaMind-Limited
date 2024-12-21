import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';

export const ThemeContext = createContext();

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.remove('dark');
    } else {
      htmlElement.classList.add('dark');
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
