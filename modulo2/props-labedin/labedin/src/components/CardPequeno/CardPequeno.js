import React from "react";
import "./CardPequeno.css"

function CardPequeno (props) {

    return (
        <div>
            <div className="container-email">
                <img src = {props.imagemEmail} />
                <p> {props.email} </p>
            </div>

            <div className="container-endereco">
                <img src = {props.imagemEndereco} />
                <p> {props.endereco} </p>
            </div>
        </div>
        
    )
}

export default CardPequeno