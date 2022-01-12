import React from 'react';
import './CardGrande.css'
import {ContainerImgGrande} from "./CardGrandeStyled"
import {ImgGrande} from "./CardGrandeStyled"
import {NomeImagem} from "./CardGrandeStyled"
import {Descricao} from "./CardGrandeStyled"


function CardGrande(props) {
    return (
        <ContainerImgGrande>
            <ImgGrande src={ props.imagem } />
            <Descricao>
                <NomeImagem>{ props.nome }</NomeImagem>
                <p>{ props.descricao }</p>
            </Descricao>
            <div>
                
            </div>
        </ContainerImgGrande>
    )
}

export default CardGrande;