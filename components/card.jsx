import React from "react";
import { useState } from "react";

const Cards = ({name,id,url}) => {

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
