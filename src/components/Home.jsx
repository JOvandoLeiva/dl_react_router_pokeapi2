import NavBar from "./NavBar";
import React from 'react';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="text-center">
        <h1 className="mt-5">Bienvenido maestro Pokemon</h1>
        <img
          src="src\img\Pikachu.jpg"
          alt="Imagen Pokémon"
          className="mt-4 pikachu"
        />
      </div>
    </>
  );
}

export default Home;
