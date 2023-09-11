import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Cards from '../components/card';
import Nav from '../components/nav';


function App() {

  /*const [informacion, setInformacion] = useState
  ([]) {informacion}*/

  const [pokemon, setPokemon] = useState ({name:"", id:"", url:""})

  useEffect( (e) => {
    fetchData(random)
    
  })

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  const random = getRandom(1,1282)

  const fetchData = async (id) => {
    try {
        const request = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await request.json()
        console.log(data)
        /*setPokemon(`${data.name} - nombre - ${data.id} - Número ${data.sprites.back_default}`)*/
        setPokemon({name: data.name, id: data.id, url: data.sprites.back_default})
        
      
    } catch (error) {
      console.log(error)
    }
  }


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
