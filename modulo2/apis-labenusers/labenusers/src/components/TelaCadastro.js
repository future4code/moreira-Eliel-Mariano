import React from "react";
import axios from "axios";
import styled from "styled-components"


export default class TelaCadastro extends React.Component {

    state = {
        novoUsuario: "",
        novoEmail: "",        
      }
    
    //parte que cria usuários
      createUser = () => {
        
        const body =  {
          name: this.state.novoUsuario,
          email: this.state.novoEmail }
        
        const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
        
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                body,
                headers              
              )
              .then((response) => {
                alert("Usuário criado com sucesso!")
              })
              .catch((error) => {
                console.log(error.response)
                alert(`Erro ao criar usuário: ${error.response.data.message}` )
              })
              this.setState({novoUsuario: "", novoEmail:""})
        }
    
      inputUsuario = (event) => {
        this.setState({novoUsuario: event.target.value})
      }
    
      inputEmail = (event) => {
        this.setState({novoEmail: event.target.value})
      }

    render(){
        return(
            <div>
                <button onClick={this.props.irParaLista}>ir para lista de usuários</button> {/* recebendo props do pai App */}
                <h2>Cadastro</h2>

                <input onChange={this.inputUsuario} value = {this.state.novoUsuario} type="text" placeholder="Nome" />

                <input onChange={this.inputEmail} value = {this.state.novoEmail} type="text" placeholder="E-mail" />

                <button onClick={this.createUser}>Criar Usuário</button>

            </div>
        )
    }
}