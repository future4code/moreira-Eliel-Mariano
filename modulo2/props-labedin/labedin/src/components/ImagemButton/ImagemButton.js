import React from 'react';
import './ImagemButton.css'
import {ImagemBotao} from "./ImagemButtonStyled"
import {ImagemBotao2} from "./ImagemButtonStyled"

function ImagemButton(props) {
    return (
        <ImagemBotao>
            <ImagemBotao2 src={ props.imagem } />                            
            <p>{ props.texto }</p>
        </ImagemBotao>
        
    )
}

export default ImagemButton;