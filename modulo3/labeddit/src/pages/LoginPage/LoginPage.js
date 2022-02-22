import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/Constants";
import { useForm } from "../../hooks/useForm";

function LoginPage() {

  const { form, onChange } = useForm({email:"", password:""})

  const submitForm = ((event)=>{
    event.preventDefault()
    //console.log("Formulário enviado:", form)
    onSubmitLogin()
  })


  const onSubmitLogin = (()=>{

    const body = form
    const headers = {headers : {
      'Content-Type': 'application/json'}}

    axios.post(`${BASE_URL}/users/login`,
    body, headers)
    .then((response)=>{
      //console.log(response.data.token)
      localStorage.setItem('token', response.data.token)
      navigate("/")
    })
    .catch((error)=>{
      console.log(error.response)
    })

  })


  const navigate = useNavigate()

  const goToFeed = ()=>{
    navigate("/")
  }

  const goToRegister = ()=>{
    navigate("/register")
  }

  //onClick={goToFeed}

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1>login funcionando</h1>
        <input name={"email"} value={form.email} onChange={onChange} placeholder="e-mail" type="email" required/>
        <input name={"password"} value={form.password} onChange={onChange} placeholder="senha" type="password" required/>
        <button type={"submit"}>Entrar</button>        
      </form>
      <button onClick={goToRegister}>Cadastrar</button>
      
    </div>
  );
}

export default LoginPage;