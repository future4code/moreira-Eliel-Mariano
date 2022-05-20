import React from "react";
import TelaCadastro from "./Components/TelaCadastro";
import TelaListaMusicas from "./Components/TelaListaMusicas";
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
        return <TelaListaUsuario irParaCadastro={this.irParaCadastro} irParaMusica={this.irParaMusica}/>
        case "musica":
          return <TelaListaMusicas irParaLista={this.irParaLista}/>
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
  
  irParaMusica = ()=>{
    this.setState({telaAtual: "musica"})
  }



  render(){


    return(
      <div>
        {this.escolheTela()}
      </div>
    )
  }  
}


