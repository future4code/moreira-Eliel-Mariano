import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import { useForm } from "../../hooks/useForm";

function RegisterPage() {

  const { form, onChange } = useForm({username:"", email:"", password:""})

  const submitForm = ((event)=>{
    event.preventDefault()
    console.log("Formulário enviado:", form)
    onSubmitSignup()
  })

  const onSubmitSignup = (()=>{

    const body = form
    const headers = {headers : {
      'Content-Type': 'application/json'}}

    axios.post(`${BASE_URL}/users/signup`,
    body, headers)
    .then((response)=>{
      console.log(response.data)
      alert("usuário criado com sucesso! Faça login para continuar!")
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error.response)
    })
  })


  const navigate = useNavigate()

  const goToLogin = ()=>{
    navigate("/login")
  }

  return (
    <div>
      <h1>register funcionando</h1>
      <form onSubmit={submitForm}>
          <input name={"username"} value={form.username} onChange={onChange} placeholder="Nome" type="text" required/>
          <input name={"email"} value={form.email} onChange={onChange} placeholder="E-mail" type="email" required/>
          <input name={"password"} value={form.password} onChange={onChange} placeholder="Senha" type="password" required/>
          <button type={"submit"}>Entrar</button>        
        </form>
      <button onClick={goToLogin}>Voltar</button>
    </div>
  );
}

export default RegisterPage;