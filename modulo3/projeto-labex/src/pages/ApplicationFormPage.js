import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';


function ApplicationFormPage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/trips/list")
  }
    
  return (
    <div>
      <Header/>
      <h1>Inscreva-se para uma viagem</h1>
      <select name="" id=""><option >Escolha uma viagem</option></select>
      <input placeholder='Nome' type="text" />
      <input placeholder='Idade' type="text" />
      <input placeholder='Texto de candidatura' type="text" />
      <input placeholder='Profissão' type="text" />
      <select name="" id=""><option >Escolha um País</option></select>

      <button onClick={()=>goBack(-1)}>Voltar</button>
      <button>Enviar</button>

      <hr />

    </div>
  );
}

export default ApplicationFormPage;