import React from "react";
import axios from "axios";
import styled from "styled-components"



export default class TelaListaMusicas extends React.Component {

    state ={
        musica: "",
        artista: "",
        url: ""
    }

    inputNovaMusica = (event) => {
        this.setState({musica : event.target.value})
    }
    inputNovoArtista = (event) => {
        this.setState({artista : event.target.value})
    }
    inputNovaUrl = (event) => {
        this.setState({url : event.target.value})
    }


    
    addTrackToPlaylist = (id) => {
        console.log(this.state)
        
        const body =  {name: this.state.musica, artist: this.state.artista, url: this.state.url}
        
        const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
        
        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`,
                body,
                headers              
              )
              .then((response) => {
                console.log(response)
                alert("Música adicionada com sucesso!")
              })
              .catch((error) => {
                console.log(error.response.data.message)
                alert(`Erro ao adicionar música: ${error.response.data.message}` )
              })
              this.setState({musica: "", artista: "", url: ""}
        )
    }



    render(){



        return <div>
            
            <button onClick={this.props.irParaLista}>Voltar para lista</button>

            <h1>Lista de músicas</h1>

            <input onChange={this.inputNovaMusica} value={this.state.musica} placeholder="Nome da música" type="text" />
            <input onChange={this.inputNovoArtista} value={this.state.artista} placeholder="Nome do Cantor/Banda" type="text" />
            <input onChange={this.inputNovaUrl} value={this.state.url} placeholder="Link da música" type="text" />
            <button onClick={this.addTrackToPlaylist}>Adicionar à lista</button>
            

        </div>
    }
}