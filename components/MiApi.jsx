
  const MiApi = async () => {


    try {
        const request = await fetch("https://pokeapi.co/api/v2/pokemon/")
        const data = await request.json()
        /*setPokemon(`${data.name} - nombre - ${data.id} - Número ${data.sprites.back_default}`)*/
        /*setPokemon({name: data.name, id: data.id, url: data.sprites.back_default})*/
        const promises = data.results.map(v =>new Promise(async (resolve, reject) => {
          const request = await fetch(v.url)
          const data = await request.json()
          resolve(data)
        }))
        return Promise.all(promises)
      
    } catch (error) {
      console.log(error)
    }
  }




export default MiApi;



 

