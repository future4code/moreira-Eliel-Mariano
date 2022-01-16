import React from 'react';
import './App.css';
import styled from 'styled-components';

const BotaoInput = styled.div`
  display:flex;
  padding: 0 0 30px 15px;
`

const MensagemImput = styled.input`
  width: 80%;
  margin: 0 5px;
`

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  
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
        ], 
      valorRemetente:"",
      valorMensagem:""
    }
    

    onChangeRemetente = (event) => {
      this.setState({valorRemetente: event.target.value})
    }

    onChangeMensagem = (event) => {
      this.setState({valorMensagem: event.target.value})
    }

    /* onClickBotao = () => {     //função que envia para o STATE ????? pq nao precisa?
      this.setState({valorRemetente: this.onChangeRemetente})
      this.setState({valorMensagem: this.onChangeMensagem})
    } */

       

    adicionarMensagem = () => {
      const novoRemetenteMensagem = {  //esse OBJETO se somará ao ARRAY do STATE
        remetente: this.state.valorRemetente,
        mensagem: this.state.valorMensagem 
        }

      const novasMensagens = [...this.state.remetenteMensagem, novoRemetenteMensagem] //clona o array original e adiciona o novo
      
      this.setState({remetenteMensagem: novasMensagens, /* edita o array original */
        valorRemetente: "", valorMensagem: ""}) /*zera o input*/
    }



    
    render (){

      console.log(this.state)
      console.log(this.state.valorRemetente)  //não necessário, apenas para
      console.log(this.state.valorMensagem)   //efeito de visualização.


      const telaWhats = this.state.remetenteMensagem.map((item, indice) => { //- mapeando a array original do state
        return <div key={indice}>
          <span><strong>{item.remetente}:</strong> {item.mensagem}</span>
        </div>       
      })
      


        return (
          <Layout>
            <Titulo>WhatsLab</Titulo>
            
           
            {telaWhats}
            

            <BotaoInput>
              <input placeholder='Remetente:'
              name={'Nome???'}
              onChange={this.onChangeRemetente}
              value={this.state.valorRemetente}
              type="text" />

              <MensagemImput placeholder='Digite sua mensagem:'
              name={'Mensagem???'}
              onChange={this.onChangeMensagem}
              value={this.state.valorMensagem}
              type="text" />

              <button onClick={this.adicionarMensagem} //this.onChangeRemetente,this.onChangeMensagem,this.adicionarMensageM, this.apagarInput
              type="submit">Enviar</button>
            </BotaoInput>          

          </Layout>
        )
    }
}

export default MeuWhatsLab;
