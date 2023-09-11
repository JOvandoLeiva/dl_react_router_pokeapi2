import React from "react";
import { useState } from "react";

const Cards = ({name,id,url}) => {

   /* const [pokemon, setPokemon] = useState ({name:"", id:"",img:""})
    setPokemon(`${pokemon.name} ${pokemon.id} ${pokemon.sprites.back_default}`)*/
   

   /* const fetchData = async () => {
        try {
            const request = await fetch(`https://pokeapi.co/api/v2/pokemon/10`)
            const data = await request.json()
            console.log(data)
            setPokemon({name:`${data.name}`, id:`${data.id}`, img:`${data.sprites.back_default}`})
            console.log(pokemon)
          
        } catch (error) {
          console.log(error)
        }
      }*/
      

    return (
        <div className="d-flex justify-content-center">
                    <div className="card">
                        <img className="card-img-top" src={url} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{id}</p>
                            <button type="button" className="btn btn-danger">Buscar random</button>
                        </div>
                    </div>


       </div>
    )
}
export default Cards;
