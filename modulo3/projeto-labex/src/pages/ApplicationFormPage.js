import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import {useForm} from '../CustonHooks/useForm';
import axios from 'axios';


function ApplicationFormPage() {

  const { form, onChange, cleanFields } = useForm({ name: "", age: "", applicationText: "", profession:"", country:"" })

  const submitForm = ((event)=>{
    event.preventDefault()
    console.log("Formulário enviado!", form);
    cleanFields()
    applyCandidate() //função que contém o axios
    
  })

  const applyCandidate =()=>{

    const id = localStorage.getItem("id")

    const headers = {headers:{
      'Content-Type': 'application/json'}}
    const body = form

    axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trips/${id}/apply`,
    body, headers)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error.response.data)
    })
  }

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/trips/list")
  }

  const nameChoice = localStorage.getItem("nameChoice")
    
  return (
    <div>
      <Header/>
      <h1>Formulário de inscrição</h1>
      <h3>{nameChoice}:</h3>
      <form onSubmit={submitForm} >
        
        <input 
          name={"name"}
          value={form.name}
          onChange={onChange}
          placeholder={'Nome'}
          type="text"
         /*  pattern={"(.*[a-z]){3}"} */
          required />
        <input 
          value={form.age}
          placeholder={"Idade"}
          onChange={onChange}
          name={"age"}
          type={"number"}
          min="18"
          required />
        <input
          value={form.applicationText}
          placeholder={"Por que o interesse?"}
          onChange={onChange}
          name={"applicationText"}
          type={"text"}
          /* pattern={"(.*[a-z]){30}"} */
          required />
        <input 
          value={form.profession}
          placeholder={"Profissão"}
          onChange={onChange}
          name={"profession"}
          type={"text"}
          /* pattern={"(.*[a-z]){10}"} */
          required />
        <select
          placeholder={"País"} 
          onChange={onChange} 
          value={form.country}
          name={"country"}
          type={"text"}
          required>
            <option >Escolha um País</option>
            <option >Brasil</option>
            <option >Holanda</option>
            <option >Itália</option>
            <option >Austrália</option>
        </select>

        <button>Enviar</button>
      </form>

      <button onClick={goBack}>Voltar</button>
    
    </div>
  );
}

export default ApplicationFormPage;