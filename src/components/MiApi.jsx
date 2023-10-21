//conexión a la API corregida y se supone que al traer las promesas las resuelve en paralelo

const MiApi = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=50&offset=0");
    if (!response.ok) {
      throw new Error(`Error al traer Pokemon. Mensaje de error: ${response.status}`);
    }
    const data = await response.json();

    const promises = data.results.map(async (result) => {
      const response = await fetch(result.url);
      if (!response.ok) {
        throw new Error(`Error con los datos del Pokemon. Mensaje de error: ${response.status}`);
      }
      return response.json();
    });

    return Promise.all(promises);
  } catch (error) {
    console.error(error);
    alert('No se cargaron los datos del Pokemon u.u.');
    throw error;
  }
};

export default MiApi;
