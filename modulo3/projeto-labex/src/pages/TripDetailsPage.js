import React from 'react';
import { useNavigate } from 'react-router-dom'; 


function TripDetailsPage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/admin/trips/list")
  }
    
  return (
    <div>
      <h1>Nome da viagem</h1>
      <p>detalhes da viagem</p>
      <button onClick={goBack}>Voltar</button>
      <h2>Candidatos Pendentes</h2>
      <p>Candidatos</p>
      <h2>Candidatos Aprovados</h2>
      <p>Candidatos</p>
    </div>
  );
}

export default TripDetailsPage;