import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from "./Header";

const Fotos = styled.img`
  height:200px;
`

function Home (props) {

  const [profile, setProfile] = useState({})  

  const getProfileToChoose = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/person")
    .then((response) => {
      //console.log(response.data.profile)
      setProfile(response.data.profile)       
    })
    .catch((error) => {
      console.log("Erro do getProfileToChoose")
    })
  }  
  
  useEffect(() => {
    getProfileToChoose()
  }, []) 
  
  
  return (
  <div>
    <Header goToMatchList={props.goToMatchList} condicionalCabecalho={props.condicionalCabecalho}/>

    <h1>home </h1>    

    <Fotos src={profile.photo} alt="foto de perfil" />
    <p><strong>{profile.name}, {profile.age} anos</strong></p>    
    {profile.bio}
    
    <Footer getProfileToChoose={() => getProfileToChoose()}   
    condicionalCabecalho={props.condicionalCabecalho}
    profile={profile} />
  </div>
    
  );
}

export default Home;