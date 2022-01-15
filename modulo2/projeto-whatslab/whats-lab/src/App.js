import React from 'react';
import './App.css';
import styled from 'styled-components';

const BotaoInput = styled.div`
  display:flex;
`

const MensagemImput = styled.input`
  width: 80%;
  margin: 0 5px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Titulo = styled.h1`
display:flex;
flex-direction: column;
flex-grow: 1;
align-items: center;
height:80vh;
`


class MeuWhatsLab extends React.Component {
    state = {
      valorRemetente:"",
      valorMensagem:"",
      remetenteMensagem: [
        {
          Remetente:"",
          Mensagem:""
        }
      ]
    } // criei um array, dentro do state, com um objeto: remetente e msg (1)
    

    
    onChangeRemetente = (event) => {
      this.setState({valorRemetente: event.target.value})
    }

    onChangeMensagem = (event) => {
      this.setState({valorMensagem: event.target.value})
    }

    onClickBotao = () => {     //função que envia para o STATE
      this.setState({valorRemetente: this.onChangeRemetente})
      this.setState({valorMensagem: this.onChangeMensagem})

    }

    apagarInput = () => {     //função que zera o input
      this.setState({valorRemetente: ""})
      this.setState({valorMensagem: ""})
    }



    adicionarMensagem = () => {      //servindo para que??????? não entendi bem...
      const novaMensagem = {
        Remetente: this.state.valorRemetente,
        Mensagem: this.state.valorMensagem 
      } 
      this.setState({
        remetenteMensagem: [...this.adicionarMensagem], //array do state sendo clonado
        valorRemetente: "", 
        valorMensagem:""
      })
    }
    //criei uma  função adicionarMensagem
      // const novaMensagem =  { nome: this.state.valorNome
                            // mensagem: this......}
      //const novoCombo  = [...this.state.transicao]
      //this.setState({remetenteMensagem: adicionarMensagem})


      atualizaMensagens = this.state.remetenteMensagem.map((item) =>{ /*??????????????????????????????*/
        return <li>{item}</li>
        /* ( 
          <div>
            Remetente = {item.Remetente}
            Mensagem = {item.Mensagem}
          </div> 
        ) */
      }
      )
    
    render (){

      //const 

      console.log(this.state)
      console.log(this.state.valorRemetente)  //não necessário, apenas para
      console.log(this.state.valorMensagem)   //efeito de visualização.


      //const tudo = this.state.array.map(item, indice) => { - mapeando a original do state
        // return ( div p nome: {item.valorNome} p mensagem: {item.mensagem}: p) - vem do novo array???
      //}

        return (
          <Layout>
            <Titulo>WhatsLab</Titulo>

            <p><strong>{this.state.valorRemetente}</strong> {this.state.valorMensagem}</p>

            {/* {this.state.atualizaMensagens} ???????????????????*/}
            {/* <ul>{this.state.adicionarMensagem}</ul> */}
            

            <BotaoInput>
              <input placeholder='Remetente:'
              name={'Nome???'}
              onChange={this.onChangeRemetente}
              value={this.state.valorRemetente}
              type="text" />

              <MensagemImput placeholder='Digite sua mensagem:'
              name='Mensagem???'
              onChange={this.onChangeMensagem}
              value={this.state.valorMensagem}
              type="text" />

              <button onClick={this.onChangeRemetente, this.onChangeMensagem, this.apagarInput}
              type="submit">Enviar</button>
            </BotaoInput>

            


          </Layout>
        )
    }
}

export default MeuWhatsLab;
