import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from '../Components/Header';
import { useProtectedPage } from '../CustonHooks/CustonHooks';


function TripDetailsPage() {

  const [tripDetailsAproved, setTripDetailsAproved] = useState()
  const [tripDetailsCandidates, setTripDetailsCandidates] = useState()
  const [id, setId] = useState()

  useProtectedPage()

  useEffect(()=>{

    
    const token = localStorage.getItem("token")
    const headers = {headers:{auth:token}}

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trip/${id}`,
    headers)
    .then((response)=>{
      console.log(response.data)
      //setTripDetailsAproved(response.data.trip.approved)
      //setTripDetailsCandidates(response.data.trip.candidates)
      setId(response.data.trip.id)
      
    })
    .catch((error)=>{
      console.log(error.data)
    })
  }, [] )

  //console.log(tripDetailsAproved)
  //console.log(tripDetailsCandidates)


  const navigate = useNavigate()

  const goBack = () => {
    navigate("/admin/trips/list")
  }
    
  return (
    <div>
      <Header/>
      <h1>Nome da viagem</h1>
      <p>detalhes da viagem</p>
      <button onClick={()=>goBack(-1)}>Voltar</button>
      <h2>Candidatos Pendentes</h2>
      <p>Candidatos</p>
      <h2>Candidatos Aprovados</h2>
      <p>Candidatos</p>
    </div>
  );
}

export default TripDetailsPage;