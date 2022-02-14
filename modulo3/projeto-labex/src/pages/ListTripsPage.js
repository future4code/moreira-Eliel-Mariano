import React from 'react';
import CardListTrip from '../Components/CardListTrip';


function ListTripsPage() {

  return (
    <div>
      <button>Voltar</button>
      <button>Inscrever-se</button>      
      <h1>Lista de Viagens</h1>
      <CardListTrip/>
      <hr />
    </div>
  );
}

export default ListTripsPage;