import React from "react";
import axios from "axios";
import styled from "styled-components"



export default class TelaCadastro extends React.Component {
    state = {
        novaLista: "",     
    }

    inputUsuario = (event) => {
        this.setState({novaLista: event.target.value})
    }
  
    createPlaylist = () => {
        console.log(this.state)
        
        const body =  {name: this.state.novaLista}
        
        const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
                body,
                headers              
              )
              .then((response) => {
                  console.log(response)
                alert("Lista criada com sucesso!")
              })
              .catch((error) => {
                console.log(error.response.data.message)
                alert(`Erro ao criar Lista: ${error.response.data.message}` )
              })
              this.setState({novaLista: ""}
        )
    }


  render(){

    return(
      <div>
        <button onClick={this.props.irParaLista}>Acessar Playlists</button>
        <h1>Criar Listas</h1>
        <input onChange={this.inputUsuario} value={this.state.novaLista} type="text" placeholder="Nome da nova lista" />
        <button onClick={this.createPlaylist}>Criar Lista</button>
      </div>
    )
  }  
}