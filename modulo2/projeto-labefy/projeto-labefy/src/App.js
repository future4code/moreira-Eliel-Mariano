import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaUsuario from "./Components/TelaListaUsuario";



export default class App extends React.Component {
  state = {
    telaAtual: "cadastro"
  }


  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro irParaLista={this.irParaLista}/> 
      case "lista":
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro}/> 
      default:
        return <p>Erro ao criar sua playlist :(</p>
         
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


