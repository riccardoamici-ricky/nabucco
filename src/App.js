import React, { useState, useEffect} from 'react';
import Dropdown from "./components/Dropdown";
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import GlobalStyle from "./globalStyles";
import { Routes, Route} from 'react-router-dom';
import Home from './pages';
import About from './pages/About';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import Restaurant from './pages/Restaurant';
import Executive from './pages/Executive';
import Menu from './pages/Menu';
import Wines from './pages/Wines';
import PopUp from './components/PopUp';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }


  useEffect(() => {
    Aos.init({})
  }, [])

  return (
    <>
      <h1>Sito in costruzione</h1>
    </>
  );
}

export default App;
