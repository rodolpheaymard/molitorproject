import './assets/css/Mg.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import  { MgHomePage } from './components/MgHomePage';
import  { MgExhibitionPage } from './components/MgExhibitionPage';
import  { MgArtistsListPage } from './components/MgArtistsListPage';
import  { MgWorkOfArtListPage } from './components/MgWorkOfArtListPage';
import { MeCatalog }  from  './model/MeCatalog';

function App() {

  let catalog = new MeCatalog();

  return (
    <Router>
      <Routes>
      <Route path="/" element={<MgHomePage catalog={catalog} />} />
      <Route path="/home" element={<MgHomePage  catalog={catalog} />} />
      <Route path="/exhibition" element={<MgExhibitionPage  catalog={catalog} />} />
      <Route path="/artists" element={<MgArtistsListPage  catalog={catalog} />} />
      <Route path="/workofart" element={<MgWorkOfArtListPage  catalog={catalog} />} />
     </Routes>
    </Router> );
}

export default App;
