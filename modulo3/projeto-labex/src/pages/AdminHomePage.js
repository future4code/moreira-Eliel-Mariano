import React from 'react';
import CardAdminTrip from '../Components/CardAdminTrip';
import { useNavigate } from 'react-router-dom';

function AdminHomePage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  const createTrip = () => {
    navigate("/admin/trips/create")
  }

  const tripDetails = () => {
    navigate("/admin/trips/:id")
  }
    
  return (
    <div>
      <h1>Painel Administrativo</h1>
      <button onClick={goBack}>Voltar</button>
      <button onClick={createTrip}>Criar Viagem</button>
      <button>Logout</button>

      <CardAdminTrip/>
      <button onClick={tripDetails}>trip details</button>

      <hr />

    </div>
  );
}

export default AdminHomePage;