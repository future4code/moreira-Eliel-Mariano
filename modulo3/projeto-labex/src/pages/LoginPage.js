import React from 'react';


function LoginPage() {
    
  return (
    <div>
      <h1>Login</h1>
      <input placeholder='E-mail' type="text" />
      <input placeholder='Senha' type="text" />

      <button>Voltar</button>
      <button>Entrar</button>
      
      <hr />
    </div>
  );
}

export default LoginPage;