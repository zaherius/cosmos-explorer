import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MarsPage from './pages/MarsPage';
import PlanetLayout from './layouts/PlanetLayout';
import SoleilPage from './pages/SoleilPage';
import MercurePage from './pages/MercurePage';
import VenusPage from './pages/VenusPage';
import NeptunePage from './pages/NeptunePage';
import UranusPage from './pages/UranusPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="planets" element={<PlanetLayout />}>
          <Route path="soleil" element={<SoleilPage />} />
          <Route path="mercure" element={<MercurePage />} />
          <Route path="venus" element={<VenusPage />} />
          <Route path="neptune" element={<NeptunePage />} />
          <Route path="uranus" element={<UranusPage />} />
          <Route path="mars" element={<MarsPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
