import React from "react";


const Cards = ({name,id,url,type}) => {

    return (
        <div className="">
                    <div className="card my-2 shadow">
                        <img className="card-img-top" src={url} alt="Card image cap"/>
                        <div className="card-body m-4 ps-4">
                            <h5 className="card-title h2 text-capitalize">{name}</h5>
                            <p className="card-text h4 "> Número de pokemon - {id}</p>
                            <p className="card-text h5">Tipo - {type}</p>
                    
                        </div>
                    </div>


       </div>
    )
}
export default Cards;
