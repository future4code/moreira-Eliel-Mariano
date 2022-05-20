import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from "styled-components"



function App() {
  
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem= "https://i1.sndcdn.com/artworks-MVadQ6aYcbTkJLer-K8cMyA-t500x500.jpg"
          nome="Eliel"
          descricao="Oi, eu sou o Eliel. No momento estou passando um aperto desgramaado para colocar uma imagem vinda de uma pasta: me ajuda? :("
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagemEmail = "https://www.snackbordo.com.br/wp-content/uploads/2017/07/icone-email.png"
          email = "eliel@labenu.com.br"
          imagemEndereco = "https://img.myloview.com.br/fotomurais/icone-de-localizacao-correta-da-casa-icone-de-endereco-com-o-sinal-de-verificacao-icone-do-endereco-e-simbolo-aprovado-confirmado-concluido-carrapato-preenchido-icone-do-vetor-700-151594094.jpg"
          endereco = "./universo./via-láctea./terra./brasil./mg./jf"
        />
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Futuro Desenvolvedor Web (front e back end) pela Labenu!" 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/hvGx3b_vvT3_QH9eacAEj-L2EmM=/400x400/smart/i490082.jpeg"
          nome="NASA"
          descricao="Na Nasa ainda não tive muitas oportunidades, mas creio que seria um bom astronauta porque eu vivo voando :x" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
