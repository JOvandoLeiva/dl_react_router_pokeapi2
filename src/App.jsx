import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pokemon from './components/Pokemon';
import Card from './components/card';



function App() {


  return (
    <>
   
       <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/pokemon" element={<Pokemon />}  />
          <Route path="/pokemon/;" element={<Pokemon />}  />
          <Route path="/pokemon/:selectedPokemon" element={<Card />} />
            
        </Routes>


    </>
  )
}

export default App
