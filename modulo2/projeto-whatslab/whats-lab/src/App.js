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
        remetenteMensagem: [
        {
          Remetente:"teste1",
          Mensagem:"teste2"
        }],      
      valorRemetente:"",
      valorMensagem:""
    } // criei um array que é dinâmico, dentro do state, com um objeto: remetente e msg (1)
    

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
      this.setState({valorRemetente: "", valorMensagem: ""})
    }
    

    adicionarMensagem = () => {      //???????????????????????? aula 1:45
      const novoRemetenteMensagem = [...this.state.remetenteMensagem, //array do state sendo clonado
        {Remetente: this.state.valorRemetente,
        Mensagem: this.state.valorMensagem }
      ] 
      this.setState({remetenteMensagem: novoRemetenteMensagem})
    }



    
    render (){

      console.log(this.state)
      console.log(this.state.valorRemetente)  //não necessário, apenas para
      console.log(this.state.valorMensagem)   //efeito de visualização.


      const telaWhats = this.state.remetenteMensagem.map((item, indice) => { //- mapeando a original do state
        return <div key={indice}>
          <span>{item.valorRemetente}:::: {item.valorMensagem}</span>
        </div>       
      })
      


        return (
          <Layout>
            <Titulo>WhatsLab</Titulo>
            <p><strong>{this.state.valorRemetente}</strong> {this.state.valorMensagem}</p>

           
            {telaWhats}
            

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

              <button onClick={ this.onChangeRemetente, this.onChangeMensagem, this.adicionarMensagem, this.apagarInput}
              type="submit">Enviar</button>
            </BotaoInput>          

          </Layout>
        )
    }
}

export default MeuWhatsLab;
