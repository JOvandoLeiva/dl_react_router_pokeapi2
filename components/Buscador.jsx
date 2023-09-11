import { useState } from "react"

const Buscador = ({pokemons,pokemonsFilter})=>{

    const [palabra,setPalabra] = useState("")
    const [orderDirection,setOrderDirection] = useState("asc")
    const order= ()=>{

        const sorting = pokemons
        
        if(orderDirection==="asc"){

            sorting.sort((a,b) =>{

                return  a.name.toLowerCase().localeCompare(b.name.toLowerCase())
               
            }) 
            setOrderDirection("desc")
        }
        else{
            sorting.sort((a,b) =>{

                return  b.name.toLowerCase().localeCompare(a.name.toLowerCase())
               
            }) 
            setOrderDirection("asc")
        }
      

        pokemonsFilter([...sorting])
        console.log(sorting)

    }
    const buscar = (e) => {

        e.preventDefault()
        
        if(!palabra){
            pokemonsFilter(pokemons)
            return
        }
        const filter = pokemons.filter(v => {

            return v.name.toLowerCase().includes(palabra.toLowerCase()) ||
            v.type.toLowerCase().includes(palabra.toLowerCase())
        
        })
 
        pokemonsFilter(filter)
        
         }

    return(
            <div>
    
                <nav className="navbar bg-body-tertiary">
                                <div className="container-fluid">
                                    <a className="navbar-brand">Pokedex</a>
                                    <button type="button" className="btn btn-success" onClick={order}>Ordenar {orderDirection === "asc" ? "Ascendente" : "Descendiente"}</button>

                                    <form className="d-flex" role="search">
                                    
                                    <input className="form-control me-2" id="busqueda" placeholder="Buscar Pokemon" aria-label="Search" onKeyUp={(p)=>setPalabra(p.target.value)}/>
                                    <button className="btn btn-outline-success" onClick={buscar}>Buscar</button>
                                    
                                </form>
                                </div>
                </nav>
             

            </div>
    )
 
}

export default Buscador;