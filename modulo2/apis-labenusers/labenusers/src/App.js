  import React from "react"
  import Axios from "axios"
  import styled from "styled-components"
  import TelaCadastro from "./components/TelaCadastro"
  import TelaListaUsuario from "./components/TelaListaUsuario"


  
  export default class App extends React.Component {
    state = {
      telaAtual: "cadastro"
    }

    escolheTela = () => {
      switch (this.state.telaAtual){
        case "cadastro":
          return <TelaCadastro irParaLista={this.irParaLista}/> //passando props em classe
        case "lista":
          return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/> //passando props em classe
        default:
          return <p>Página bugou :)</p>
           
      }
    }

    irParaCadastro = ()=>{
      this.setState({telaAtual: "cadastro"})
    }

    irParaLista = ()=>{
      this.setState({telaAtual: "lista"})
    }


    render(){
      return(
        <div>
          {this.escolheTela()}
        </div>
      )
    }

  }