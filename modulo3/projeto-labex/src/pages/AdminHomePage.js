import React from 'react';
import CardAdminTrip from '../Components/CardAdminTrip';


function AdminHomePage() {
    
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button>Voltar</button>
      <button>Criar Viagem</button>
      <button>Logout</button>

      <CardAdminTrip/>

      <hr />

    </div>
  );
}

export default AdminHomePage;