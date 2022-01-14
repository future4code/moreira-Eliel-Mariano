import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {

  state = {
    listaUsuariosInsta4: [
      {
        nomeUsuario:'mônica',
        fotoUsuario:'https://lojasbrilhante.vteximg.com.br/arquivos/ids/165855-1000-1000/totem-turma-da-monica-1.png?v=637225770905070000',
        fotoPost:'https://www.mundoecologia.com.br/wp-content/uploads/2019/11/Filhote-de-Golden-Retriever-2.jpg'
      },
      {
        nnomeUsuario:'kalinka',
        fotoUsuario:'https://imagem.natelinha.uol.com.br/tudo-sobre/kalinka_7643.jpeg',
        fotoPost:'https://i.pinimg.com/originals/dc/4c/7e/dc4c7ef452fe42257f19f0f3a193faad.jpg'
      },
      {
        nomeUsuario:'cleo',
        fotoUsuario:'http://static.glamurama.uol.com.br/2016/09/cleo-pires.jpg',
        fotoPost:'https://img.r7.com/images/cleo-07012021132242220'
      }
    ]
  };   
  


  render() {

    const listaInsta4 = this.state.listaUsuariosInsta4.map((item, indice)=>{
      return <Post key={indice}
      nomeUsuario={item.nomeUsuario}
      fotoUsuario={item.fotoUsuario}
      fotoPost={item.fotoPost}
      />
                
    })

    
    return (

      <MainContainer>
        {listaInsta4}
      </MainContainer>


      /* sem renderizar listas
       <MainContainer>
        <Post
          nomeUsuario={'mônica'}
          fotoUsuario={'https://lojasbrilhante.vteximg.com.br/arquivos/ids/165855-1000-1000/totem-turma-da-monica-1.png?v=637225770905070000'}
          fotoPost={'https://www.mundoecologia.com.br/wp-content/uploads/2019/11/Filhote-de-Golden-Retriever-2.jpg'}
        />
        <Post
          nomeUsuario={'kalinka'}
          fotoUsuario={'https://imagem.natelinha.uol.com.br/tudo-sobre/kalinka_7643.jpeg'}
          fotoPost={'https://i.pinimg.com/originals/dc/4c/7e/dc4c7ef452fe42257f19f0f3a193faad.jpg'}
        />
        <Post
          nomeUsuario={'cleo'}
          fotoUsuario={'http://static.glamurama.uol.com.br/2016/09/cleo-pires.jpg'}
          fotoPost={'https://img.r7.com/images/cleo-07012021132242220'}
        />
      </MainContainer> */
    );
  };
}

export default App;
