import React from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';


function HomePage() {
  
  const navigate = useNavigate()

  const goToListTrip = () =>{
    navigate("/trips/list")
  }

  const goToLogin =() =>{
    navigate("/login")
  }

  return (
    <div>
      <Header/>
      <h1>LabeX</h1>
      <button onClick={goToListTrip}>Ver Viagens</button>
      <button onClick={goToLogin}>Área de Administrador</button>
      <hr />
    </div>
  );
}

export default HomePage;