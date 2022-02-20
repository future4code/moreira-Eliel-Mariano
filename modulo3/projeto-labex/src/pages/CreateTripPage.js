import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { useProtectedPage } from '../CustonHooks/CustonHooks';



function CreateTripPage() {

  const [name, setName] = useState()
  const [planet, setPlanet] = useState()
  const [date, setDate] = useState()
  const [description, setDescription] = useState()
  const [durationInDays, setDurationInDays] = useState()

  useProtectedPage()
  
  const createTrip =()=>{

    const token = localStorage.getItem("token")

    const headers = {headers:{
      'Content-Type': 'application/json',
      'auth': token}}
    const body = {
      name: name,
      planet: planet,
      date: date,
      description: description,
      durationInDays: durationInDays
    }

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/eliel-mariano-moreira/trips",
    body, headers)
    .then((response)=>{
      console.log(response.data)
    })
    .catch((error)=>{
      console.log(error.response.data)
    })
  }


  const navigate = useNavigate()

  const goBack = () => {
    navigate("/admin/trips/list")
  }

  const onChangeName=(event)=>{
    setName(event.target.value)
  }

  const onChangeDate=(event)=>{
    setDate(event.target.value)
  }

  const onChangeDescription=(event)=>{
    setDescription(event.target.value)
  }

  const onChangeDurationInDays=(event)=>{
    setDurationInDays(event.target.value)
  }

  const OnChangePlanet=(event)=>{
    setPlanet(event.target.value)
  }

    
  return (
    <div>
      <Header/>
      <h1>Criar Viagem</h1>
      <input value={name} onChange={onChangeName} placeholder='Nome' type="text" />
      <select value={"planet"} onChange={OnChangePlanet}>
        <option>Escolha um Planeta</option>
        <option>Terra</option>
      </select>
      <input value={date} onChange={onChangeDate} placeholder='Data' type="date" />
      <input value={description} onChange={onChangeDescription} placeholder='Descrição' type="text" />
      <input value={durationInDays} onChange={onChangeDurationInDays} placeholder='Duração em dias' type="number" />

      <button onClick={goBack}>Voltar</button>
      <button onClick={()=>createTrip()} >Criar</button>
      <hr />
    </div>
  );
}

export default CreateTripPage;