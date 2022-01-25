  import React from "react"
  import Axios from "axios"
  import styled from "styled-components"
  import './App.css'
  import axios from "axios"
  import AppTela2 from "./AppTela2"

  
  
  export default class App extends React.Component {
    state = {
      novoUsuario: "",
      novoEmail: "",
      usuariosCadastrados: []
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
            //this.pegar a lista para atualizar imediatamente
      }
  
    inputUsuario = (event) => {
      this.setState({novoUsuario: event.target.value})
    }

    inputEmail = (event) => {
      this.setState({novoEmail: event.target.value})
    }
    
  // pegando todos usuários

  componentDidMount(){
    this.getAllUsers()
  }

  getAllUsers = () => {

    const headers = {headers:{Authorization: "eliel-mariano-moreira"}}

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            headers
            )
            .then((response) => {
              console.log(response.data) 
              this.setState({ usuariosCadastrados: response.data })
              //alert("Pesquisa concluída!")
            })
            .catch((error) => {
              console.log(error.response)
              //alert(`Erro: ${error.response.data}`)
            })
            
    }
    

    //deletando usuários

    deleteUser = (userID) => {
      const headers = {headers:{Authorization: "eliel-mariano-moreira"}}

      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userID}`, //?????
                  headers,               
                  )
                  .then((response) => {
                    console.log(response.data)

                    //this.setState({ usuariosCadastrados: response.data.id})
                  })

    }

  

  render () {

    const usuariosCadastradosAuxiliar = this.state.usuariosCadastrados.map((item) =>{
      return <li key={item.id}>{item.name} <button onClick={() => this.deleteUser(item.id)}> Excluir </button> </li>
    })
      
  
      return (
        <div>
  
          <button><a href= "AppTela2">Trocar de tela</a></button> {/* ?????? */} <br></br>
  
          <input onChange={this.inputUsuario} value = {this.state.novoUsuario} type="text" placeholder="Nome" />
  
          <input onChange={this.inputEmail} value = {this.state.novoEmail} type="text" placeholder="E-mail" />
  
          <button onClick={this.createUser}>Criar Usuário</button>

          {usuariosCadastradosAuxiliar}


  
        </div>
      )
    }
  }