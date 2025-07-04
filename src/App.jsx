import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Videos from './pages/Videos';
import Fighters from './pages/Fighters';
import Trainers from './pages/Trainers';
import Locations from './pages/Locations';
import Equipment from './pages/Equipment';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Header from './Header';
import Footer from './Footer';
import ThemeManager from './shared/ThemeManager';
// import PWAInstallButton from './shared/PWAInstallButton';
// import OfflineIndicator from './shared/OfflineIndicator';
import './styles/App.scss';

export default function FightSite() {
  return (
    <Router>
      <ThemeManager />
      {/* <OfflineIndicator /> */}
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Videos" element={<Videos />} />
          <Route path="/Fighters" element={<Fighters />} />
          <Route path="/Trainers" element={<Trainers />} />
          <Route path="/Locations" element={<Locations />} />
          <Route path="/Equipment" element={<Equipment />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Privacy" element={<Privacy />} />
        </Routes>
      </main>
      <Footer />
      {/* <PWAInstallButton /> */}
    </Router>
  );
}