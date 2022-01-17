import React from 'react'
import {Etapa1} from './componentes/etapa1'
import {Etapa2} from './componentes/etapa2'
import {Etapa3} from './componentes/etapa3'
import {Etapa4} from './componentes/etapa4'
import styled from 'styled-components';

const principal = styled.div`
  display: flex;
  align-items: center;
`


class Formulário extends React.Component {
  state = {
    etapa: 1,
  }

  renderizaEtapa = () => {
    switch (this.state.etapa){
      case 1:
        return <Etapa1/>
      case 2:
        return <Etapa2/>
      case 3 :
        return <Etapa3/>
      case 4 :
        return <Etapa4/>
      case 5 : 
      return this.setState ({etapa: 1})
    }
  }

  irParaProximaEtapa = () =>{
    this.setState ({etapa: this.state.etapa + 1})
  }

  render(){

  return (
    <principal>
     
      {this.renderizaEtapa()}

      <button onClick={this.irParaProximaEtapa}>Próxima etapa</button>

    </principal>
  );
}}

export default Formulário;