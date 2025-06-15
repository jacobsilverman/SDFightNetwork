import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Fighters from './pages/Fighters';
import Trainers from './pages/Trainers';
import Locations from './pages/Locations';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Header from './Header';
import Footer from './Footer';
import './styles/App.scss';


export default function FightSite() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Fighters" element={<Fighters />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/Locations" element={<Locations />} />
        <Route path="/Equipment" element={<Equipment />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}