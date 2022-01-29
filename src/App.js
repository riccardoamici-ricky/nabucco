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
      <GlobalStyle />
      <ScrollToTop />
      < PopUp />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/restaurant" element={ <Restaurant />} />
        <Route path="/executive" element={ <Executive />} />
        <Route path="/filosofia" element={ <About />} />
        <Route path="/contatti" element={ <Contact />} />
        <Route path="/ristorante-tanagra" element={ <Restaurant />} />
        <Route path="/eventi" element={ <Executive />} />
        <Route path="/menu" element={ <Menu />} />
        <Route path="/wines" element={ <Wines />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
