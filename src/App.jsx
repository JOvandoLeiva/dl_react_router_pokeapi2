import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/Card';
import MiApi from '../components/MiApi';
import Buscador from '../components/buscador';



function App() {


    const [pokemons, setPokemons] = useState ([])
    const [species, setSpecies] = useState ([])
    const [pokemonsFilter, setPokemonsFilter] = useState ([])
    const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
     }
    const random = getRandom(1,1282)


  useEffect(() => {
    (async () => {
      const datapoke = await MiApi();
      const dataIn = datapoke.map(value=>({name: value.name, id: value.id, url: value.sprites.front_default, type: value.types.map(s=> s.type.name).at(0)}))
      setPokemons(dataIn)
      setPokemonsFilter(dataIn)
      setSpecies(
        Array.from(new Set(datapoke.flatMap(s=> s.types).map(s=> s.type.name)))
      )
      console.log(dataIn)
    })();

  
    return () => {
      // this now gets called when the component unmounts
    };
  }, []);


  /*const [informacion, setInformacion] = useState
  ([]) {informacion}*/
  
  return (
    <>
     <div className='container-fluid'>
       
        
      <Buscador pokemons={pokemons} pokemonsFilter={(v)=> setPokemonsFilter(v)}/>
                
    {pokemonsFilter && pokemonsFilter.length>0 ? 
     <div className='row'>
     {
          pokemonsFilter.map((pokemon,i) => (
              <div className="col-md-4" key={`row-${i}`}>
                   <Cards name={pokemon.name} id ={pokemon.id} url ={pokemon.url} type={pokemon.type}/>
              </div>
          ))
      }
       </div> : 

        <div className='container d-flex justify-content-center align-items-center'>
                      
        <p>No hay pokemones :3</p>

        </div>
    
    }
            
            
                      
      </div>


    </>
  )
}

export default App
