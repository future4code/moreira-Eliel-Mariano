import React from 'react';
import { useNavigate } from 'react-router-dom';



function CreateTripPage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/admin/trips/list")
  }
    
  return (
    <div>
      <h1>Criar Viagem</h1>
      <input placeholder='Nome' type="text" />
      <select><option>Escolha um Planeta</option></select>
      <input placeholder='Data' type="text" />
      <input placeholder='Descrição' type="text" />
      <input placeholder='Duração em dias' type="number" />

      <button onClick={goBack}>Voltar</button>
      <button>Criar</button>
      <hr />
    </div>
  );
}

export default CreateTripPage;