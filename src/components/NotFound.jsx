import React from 'react';
import Navbar from './NavBar';

const NotFound = () => {
  return (
    <div>
     <Navbar />
      <div className="text-center">
        <div>
        <h2 className='mt-2'>Página no encontrada o no existe</h2>
          <img src="src/img/spinda_notfound.png" alt="Imagen no encontrada" className='mt-2 mainImages' />
          
        </div>
      </div>
    </div>
  );
}

export default NotFound;
