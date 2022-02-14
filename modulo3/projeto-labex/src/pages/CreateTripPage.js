import React from 'react';


function CreateTripPage() {
    
  return (
    <div>
      <h1>Criar Viagem</h1>
      <input placeholder='Nome' type="text" />
      <select><option>Escolha um Planeta</option></select>
      <input placeholder='Data' type="text" />
      <input placeholder='Descrição' type="text" />
      <input placeholder='Duração em dias' type="number" />
      <hr />
    </div>
  );
}

export default CreateTripPage;