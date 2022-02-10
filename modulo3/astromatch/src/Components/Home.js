import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from "./Header"

const Fotos = styled.img`
  height:500px;
`

function Home (props) {

  const [profile, setProfile] = useState({})
  const [idProfile, setIdProfile] = useState ()  

  const getProfileToChoose = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/person")
    .then((response) => {
      //console.log(response.data.profile)
      setProfile(response.data.profile)
      //console.log(response.data.profile.id)
      setIdProfile(response.data.profile.id)      
    })
    .catch((error) => {
      console.log("Erro ao carregar perfil")
    })
  }  
  
  useEffect(() => {
    getProfileToChoose()
  }, []) 

  
  return (
  <div>
    <Header goToMatchList={props.goToMatchList} condicionalCabecalho={props.condicionalCabecalho}/>

    <h1>home</h1>    

    <Fotos src={profile.photo} alt="foto de perfil" />
    <p><strong>{profile.name}, {profile.age} anos</strong></p>    
    {profile.bio}
    
    <Footer getProfileToChoose={() => getProfileToChoose()} idProfile={idProfile}/>
  </div>
    
  );
}

export default Home;