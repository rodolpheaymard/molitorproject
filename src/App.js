import './assets/css/Mg.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import  MgPageHome from './components/MgPageHome';
import  MgPageExhibition from './components/MgPageExhibition';
import  MgPageArtistsList from './components/MgPageArtistsList';
import  MgPageArtist from './components/MgPageArtist';
import  MgPageProductsList from './components/MgPageProductsList';
import  MgPageCollections from './components/MgPageCollections';
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
      <Route path="/artist/:id" element={<MgPageArtist  catalog={singleCatalog} />} />
      <Route path="/collections" element={<MgPageCollections  catalog={singleCatalog} />} />
      <Route path="/collection/:id" element={<MgPageProductsList catalog={singleCatalog} />} />
      <Route path="/product/:id" element={<MgPageProduct  catalog={singleCatalog} />} />
     </Routes>
    </Router> );
}

export default App;
