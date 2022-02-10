import axios from 'axios';
import React from 'react';
import { useState } from 'react/cjs/react.development';
import Header from './Header';

function MatchList(props) {

  const [matchList, setMatchList] = useState([]) //array dos matches

  const getMatches = () =>{
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/matches")
    .then((response) => {
      console.log(response.data.matches)     
    })
    .catch((error) => {
      console.log("Erro ao carregar perfis")
    })
  }

  getMatches()
//receber o array do axios, fazer lista para ver se ta certo, e mapear
  
  return (
  <div>

    <Header goToHome={props.goToHome}/>

      <h1>matchs</h1>
    
    

  </div>
    
  );
}

export default MatchList;