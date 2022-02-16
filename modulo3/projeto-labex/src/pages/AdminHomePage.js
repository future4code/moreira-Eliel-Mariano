import React, { useEffect } from 'react';
import CardAdminTrip from '../Components/CardAdminTrip';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import { useProtectedPage } from '../CustonHooks/CustonHooks';
import { useState } from 'react/cjs/react.development';



function AdminHomePage() {

  const [nametrip, setNameTrip] = useState([])

  useProtectedPage()

  useEffect(()=>{

    const token = localStorage.getItem("token")
    const headers = {headers:{auth:token}}

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trips",
    headers)
    .then((response)=>{
      console.log(response.data.trips)
      setNameTrip(response.data.trips)
    })
    .catch((error)=>{
      console.log(error.data)
    })
  }, [] )

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

  //map para imprimir nome da viagem e o delete
 
    
  return (
    <div>
      <Header/>
      <h1>Painel Administrativo</h1>
      <button onClick={()=>goBack(-1)}>Voltar</button>
      <button onClick={createTrip}>Criar Viagem</button>
      <button>Logout</button>
      

      <CardAdminTrip/>
      <button onClick={tripDetails}>trip details</button>

      <hr />

    </div>
  );
}

export default AdminHomePage;