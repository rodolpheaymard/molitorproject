import './assets/css/Mg.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import  { MgHomePage } from './components/MgHomePage';
import  { MgExhibitionPage } from './components/MgExhibitionPage';
import  { MgArtistsListPage } from './components/MgArtistsListPage';
import  { MgProductsListPage } from './components/MgProductsListPage';
//import   MgProductPageWrapper  from './utils/MgWrapper';
import   MgProductPage  from './components/MgProductPage';
import   singleCatalog   from  './model/MeCatalog';


     
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MgHomePage catalog={singleCatalog} />} />
      <Route path="/home" element={<MgHomePage  catalog={singleCatalog} />} />
      <Route path="/exhibition" element={<MgExhibitionPage  catalog={singleCatalog} />} />
      <Route path="/artists" element={<MgArtistsListPage  catalog={singleCatalog} />} />
      <Route path="/product/:id" element={<MgProductPage  catalog={singleCatalog} />} />
      <Route path="/worksofart" element={<MgProductsListPage  catalog={singleCatalog} />} />
     </Routes>
    </Router> );
}

export default App;
