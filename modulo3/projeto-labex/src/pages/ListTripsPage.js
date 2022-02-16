import React from 'react';
import { useNavigate } from 'react-router-dom';
import CardListTrip from '../Components/CardListTrip';
import Header from '../Components/Header';


function ListTripsPage() {

  const navigate = useNavigate()

  const goToApplicationForm = () => {
    navigate("/trips/application")
  }

  const goBack = () => {
    navigate("/")
  }



  return (
    <div>
      <Header/>
      <button onClick={()=>goBack(-1)}>Voltar</button>
      <button onClick={goToApplicationForm}>Inscrever-se</button>      
      <h1>Lista de Viagens</h1>
      <CardListTrip/>
      <hr />
    </div>
  );
}

export default ListTripsPage;