import React from "react";


const Nav = () => {

  
    return (
        
                <nav className="navbar bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand">Pokedex</a>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Buscar Pokemon" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                    </div>
                </nav>

    )
}
export default Nav;