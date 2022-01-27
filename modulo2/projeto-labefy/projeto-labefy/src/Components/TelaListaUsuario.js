import React from "react";
import axios from "axios";
import styled from "styled-components"
import TelaListaMusicas from "./TelaListaMusicas"

const CardLista = styled.div`
  border: 1px solid green;
  padding: 10px;
  margin: 10px;
  width: 250px;
  display: flex;
  justify-content: space-between;
`

export default class TelaListaUsuario extends React.Component {

  state ={
    listasCadastradas: []
  }

  componentDidMount(){
    this.getAllPlaylists()
  }

  getAllPlaylists = () => {
      
    const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
  
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
            headers
            )
            .then((response) => {
              //console.log(response.data) 
              this.setState({ listasCadastradas: response.data.result.list })                  
            })
            .catch((error) => {
              //console.log(error.response.data)
              alert(`Erro: ${error.response.data}`)
            })
  }

  deletePlaylist = (id) => { //parâmetro id a ser deletado
    const headers = {headers:{Authorization: "eliel-mariano-moreira"}}

    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`,
                headers,                                                    //inserindo o parâmetro id na template string
                )
                .then((response) => {
                  console.log(response.data)
                  alert("Lista deletada com sucesso!")    
                  this.getAllPlaylists() // imprime imediatamente a nova lista
                })
                .catch((error) => {
                  console.log(error.response.data)
                  alert("Erro ao deletar lista")
                })
  }




  render(){
    console.log(this.state.listasCadastradas)
    const listasCadastradasAuxiliar = this.state.listasCadastradas.map((item)=>{
      return <CardLista key={item.id}>
        {item.name}
        <button onClick={() => this.deletePlaylist(item.id)}> Excluir </button>
      </CardLista>

    })


    return(
      <div>
        <button onClick={this.props.irParaCadastro}>Criar Playlists</button>
        <h1>Suas Listas</h1>
        {listasCadastradasAuxiliar}

      

        
        
      </div>
    )
  }  
}