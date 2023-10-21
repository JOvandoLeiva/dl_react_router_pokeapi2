import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from "./NavBar";
import MiApi from "./MiApi";


const Pokemon = () => {
  const navigate = useNavigate(); 

  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await MiApi();
        const names = data.map((pokemon) => pokemon.name);
        setPokemonList(names);
      } catch (error) {
        console.error(error);
        alert('No se pudieron cargar los nombres Pokemon: ' + error.message);
      }
    }

    fetchData();
  }, []);

 
  const PokemonDetail = async () => {
    if (selectedPokemon) {
        console.log(selectedPokemon)
      navigate(`/pokemon/${selectedPokemon}`);
    }
  };

  return (
    <>
      <NavBar />
      <div className="text-center">
        <h1 className="mt-5">Selecciona un Pokemon</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="col-md-4">
            <select className="form-select mt-4" value={selectedPokemon} onChange={(e) => setSelectedPokemon(e.target.value)}>
              <option value="">Pokemon</option>
              {pokemonList.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <button name="detail" className="btn btn-primary mt-4 bg-black" onClick={PokemonDetail}>
          Ver Detalle
        </button>
      </div>
    </>
  );
};

export default Pokemon;
