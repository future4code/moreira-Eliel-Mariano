import React from "react";
import axios from "axios";
import styled from "styled-components"


export default class TelaListaUsuario extends React.Component {

    state = {
        usuariosCadastrados: []
    }



    componentDidMount(){  //atualiza automaticamente o getAllUsers
        this.getAllUsers()
    }
      
    getAllUsers = () => {
      
        const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
      
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
                headers
                )
                .then((response) => {
                  //console.log(response.data) 
                  this.setState({ usuariosCadastrados: response.data })                  
                })
                .catch((error) => {
                  //console.log(error.response.data)
                  alert(`Erro: ${error.response.data}`)
                })
                
    }

    deleteUser = (id) => { //parâmetro id do usuário a ser deletado
        const headers = {headers:{Authorization: "eliel-mariano-moreira"}}
    
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`,
                    headers,                                                    //inserindo o parâmetro id na template string
                    )
                    .then((response) => {
                      //console.log(response.data)
                      alert("Usuário deletado com sucesso!")    
                      this.getAllUsers() // imprime imediatamente a nova lista
                    })
                    .catch((error) => {
                        //console.log(error.response.data)
                        alert("Erro")
                    })
    }


    render(){

        const usuariosCadastradosAuxiliar = this.state.usuariosCadastrados.map((item) =>{
            return <li key={item.id}>{item.name} 
            <button onClick={() => this.deleteUser(item.id)}> Excluir </button>
             </li>
          })



        return(
            <div>
                <button onClick={this.props.irParaCadastro}>ir para cadastro</button> {/* recebendo props do pai App */}
                <h2>lista de usuários</h2>

                {usuariosCadastradosAuxiliar}

            </div>
        )
    }
}