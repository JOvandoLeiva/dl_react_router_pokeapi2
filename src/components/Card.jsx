import React, { useEffect, useState } from 'react';
import Navbar from './NavBar';
import { useParams } from 'react-router-dom';

const Card = () => {
  const { selectedPokemon } = useParams(); 
  const [pokemonDetails, setPokemonDetails] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon}`);
        if (!response.ok) {
          throw new Error(`Error al buscar el Pokémon. Mensaje de error: ${response.status}`);
        }
        const data = await response.json();
        setPokemonDetails(data);
      } catch (error) {
        console.error(error);
        alert('No se pudo encontrar el Pokémon u.u.');
      }
    };

    fetchPokemonDetails();
  }, [selectedPokemon]);

  return (
    <>
      <Navbar />
      <div className="col-md-6 mx-auto">
        {pokemonDetails ? (
          <div className="card my-2 shadow mt-5">
            <div className="row g-0">
              <div className="col-md-4">
                <img className="card-img" src={pokemonDetails.sprites.front_default} alt="Card image cap" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title h5 text-capitalize">{pokemonDetails.name}</h5>
                  <p className="card-text h5">N°- {pokemonDetails.id}</p>
                  <p className="card-text h5">Tipo(s): {pokemonDetails.types.map((type) => type.type.name).join(', ')}</p>
                  <p className="card-text h5">HP: {pokemonDetails.stats[0].base_stat}</p>
                  <p className="card-text h5">Ataque: {pokemonDetails.stats[1].base_stat}</p>
                  <p className="card-text h5">Defensa: {pokemonDetails.stats[2].base_stat}</p>
                  <p className="card-text h5">Ataque Especial: {pokemonDetails.stats[3].base_stat}</p>
                  <p className="card-text h5">Defensa Especial: {pokemonDetails.stats[4].base_stat}</p>
                  <p className="card-text h5">Velocidad: {pokemonDetails.stats[5].base_stat}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Buscando tu Pokemon...</p>
        )}
      </div>
    </>
  );
};

export default Card;
