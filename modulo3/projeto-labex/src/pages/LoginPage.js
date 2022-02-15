import React from 'react';
import { useNavigate } from 'react-router-dom';


function LoginPage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  const  adminHomePage = () => {
    navigate("/admin/trips/list")
  } 

  return (
    <div>
      <h1>Login</h1>
      <input placeholder='E-mail' type="text" />
      <input placeholder='Senha' type="text" />

      <button onClick={goBack}>Voltar</button>
      <button onClick={adminHomePage}>Entrar</button> {/* necessitará de senha */}
      
      <hr />
    </div>
  );
}

export default LoginPage;