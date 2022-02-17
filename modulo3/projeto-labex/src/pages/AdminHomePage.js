import React, { useEffect, useState } from 'react';
import CardAdminTrip from '../Components/CardAdminTrip';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import axios from 'axios';
import { useProtectedPage } from '../CustonHooks/CustonHooks';


function AdminHomePage() {

  const [nametrip, setNameTrip] = useState([])
  const [id, setId] = useState()

  console.log(id)

  useProtectedPage()

  useEffect(()=>{

    const token = localStorage.getItem("token")
    const headers = {headers:{auth:token}}

    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trips",
    headers)
    .then((response)=>{
      //console.log(response.data.trips)
      setNameTrip(response.data.trips)
    })
    .catch((error)=>{
      console.log(error.data)
    })
  }, [] )


  const deleteTrip =()=>{

    const token = localStorage.getItem("token")

    const headers = {headers:{
      'Content-Type': 'application/json',
      auth: token}}

    axios.del(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trips/${id}`,
    headers)
    .then((response)=>{
      console.log(response.data)      
    })
    .catch((error)=>{
      console.log(error.response)
    })
  }

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

  const teste =(event)=>{
    setId(event.target.value)
  }

  
  const listName = nametrip.map((item, index)=>{ //ao lado da key, inserir value={item.id}, fazer função e estado com input controlado?
    return <div key={item.id} value={item.id}> 
      <h3>{item.name}</h3>
      <h5>{item.id}</h5>
      <button onClick={tripDetails}>trip details</button>
      <button onClick={()=>teste(), ()=>deleteTrip()}>Excluir</button>   
    </div>
  })

      
  return (
    <div>
      <Header/>
      <h1>Painel Administrativo</h1>
      <button onClick={()=>goBack(-1)}>Voltar</button>
      <button onClick={createTrip}>Criar Viagem</button>
      <button>Logout</button>      

      <CardAdminTrip listName={listName}/>
    </div>
  );
}
export default AdminHomePage;