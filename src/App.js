import './assets/css/Mg.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import  MgPageHome from './components/MgPageHome';
import  MgPageExhibition from './components/MgPageExhibition';
import  MgPageArtistsList from './components/MgPageArtistsList';
import  MgPageProductsList from './components/MgPageProductsList';
import  MgPageProduct from './components/MgPageProduct';
import  singleCatalog from './model/MeCatalog';


     
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MgPageHome catalog={singleCatalog} />} />
      <Route path="/home" element={<MgPageHome  catalog={singleCatalog} />} />
      <Route path="/exhibition" element={<MgPageExhibition  catalog={singleCatalog} />} />
      <Route path="/artists" element={<MgPageArtistsList  catalog={singleCatalog} />} />
      <Route path="/product/:id" element={<MgPageProduct  catalog={singleCatalog} />} />
      <Route path="/collections" element={<MgPageProductsList  catalog={singleCatalog} />} />
     </Routes>
    </Router> );
}

export default App;
