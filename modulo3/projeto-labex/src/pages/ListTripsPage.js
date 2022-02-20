import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardListTrip from '../Components/CardListTrip';
import Header from '../Components/Header';


function ListTripsPage() {

  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }

  return (
    <div>
      <Header/>
      <button onClick={goBack}>Voltar</button>
      <h1>Lista de Viagens</h1>
      <CardListTrip/>
      <hr />
    </div>
  );
}

export default ListTripsPage;