import './assets/css/Mg.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { MgHomePage } from './components/MgHomePage';
import  { MgExhibitionPage } from './components/MgExhibitionPage';
import  { MgArtistsListPage } from './components/MgArtistsListPage';
import  { MgWorkOfArtListPage } from './components/MgWorkOfArtListPage';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MgHomePage/>} />
      <Route path="/home" element={<MgHomePage/>} />
      <Route path="/exhibition" element={<MgExhibitionPage/>} />
      <Route path="/artists" element={<MgArtistsListPage/>} />
      <Route path="/workofart" element={<MgWorkOfArtListPage/>} />
     </Routes>
    </Router> );
}

export default App;
