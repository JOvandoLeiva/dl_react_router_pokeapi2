import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Card from './components/card';
import NotFound from './components/NotFound';



function App() {


  return (
    <>
   
       <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/pokemon" element={<Pokemon />}  />
          <Route path="/pokemon/;" element={<Pokemon />}  />
          <Route path="/pokemon/:selectedPokemon" element={<Card />} />
          <Route path="*" element={<NotFound />}  />
        </Routes>


    </>
  )
}

export default App
