import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Card';
import Nav from '../components/Nav';
import MiApi from '../components/MiApi';



function App() {


    const [pokemon, setPokemon] = useState ([])
    const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
     }
    const random = getRandom(1,1282)


  useEffect(() => {
    (async () => {
      const datapoke = await MiApi();
      console.log(datapoke)
      setPokemon(datapoke.map(value=>({name: value.name, id: value.id, url: value.sprites.back_default})))
    })();
  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);


  /*const [informacion, setInformacion] = useState
  ([]) {informacion}*/
  
  return (
    <>
     <div className='container col-md-12'>
       
       <Nav />

        <Cards name={pokemon.name} id ={pokemon.id} url ={pokemon.url}/>
       
  
      </div>


    </>
  )
}

export default App
