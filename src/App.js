import React from 'react'
import Mapa from './pages/mapa/Mapa';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Materiais from './pages/materiais/Materiais';
import Dados from './pages/dados/Dados';
import './app.css'
import Sobre from './pages/sobre/Sobre';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function App() {
  useEffect(() =>{
    const fetchLocations = async ()=>{
      const res = await axios.get("/place")
      console.log(res)
    }
    fetchLocations()
  }, [])
  return (
    <>
      <Router>
        <Routes>
          <Route path="/mapa" element={<Mapa/>} />
          <Route exact path="/" element={<Home />} />
          <Route path="/materiais" element={<Materiais />} />
          <Route path="/dados" element={<Dados />} />
          <Route path="/sobre" element={<Sobre/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
