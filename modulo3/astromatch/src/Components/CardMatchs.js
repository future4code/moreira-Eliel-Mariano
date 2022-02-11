import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Fotos = styled.img`
  height:200px;
`

function CardMatchs () {

  const [matchList, setMatchList] = useState([])  

  const getMatches = () =>{ //só funciona com daniel???
    axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/matches")
    .then((response) => {
    console.log(response)
    setMatchList(response.data.matches)
    })
    .catch((error) => {
    console.log("Erro ao carregar perfis")
    })
  }
  
  useEffect(() => {
    getMatches()
  }, [])

  //console.log(matchList)
  
  const auxMatchList = matchList.map((item)=>{
    //console.log(item)  
    return <div key={item}>          
          <Fotos src={item.photo} />
          <p>{item.name}</p>
        </div>
    
  })  
  
  return (
      <div>
        <h3>card matches funcionando!</h3>
        {auxMatchList}
        <h1>{matchList.name}</h1>
      </div>
    )
}
export default CardMatchs;