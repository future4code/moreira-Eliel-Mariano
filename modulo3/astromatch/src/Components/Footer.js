import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Footer(props) {

  const [profileLiked, setProfileLiked] = useState()

  if(props.condicionalCabecalho==="Home"){    

    const choosePerson = () => {
      const body = {id: props.profile.id, choice:true}
      const headers = { headers: {'Content-Type': 'application/json'}}

      axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/choose-person",
        body, headers)
        .then((response) => {
          //console.log(response.data.isMatch)
          setProfileLiked(response.data.isMatch)
        })
        .catch((error) => {
          console.log("Erro do choosePerson")
        })

      props.getProfileToChoose()
    }
    
    if (profileLiked){
      console.log(profileLiked)
      console.log("deu match")  
    }

    return (
      <div>      
        <footer>        
          <hr />
          <button onClick={props.getProfileToChoose} >Deslike </button>
          <button onClick={()=>choosePerson()} >Like</button>
        </footer>
      </div>    
    );

  }else{

    const clear = () => {
      const headers = {headers: {'Content-Type': 'application/json'}}

      axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/eliel/clear",
        headers)
        .then((response) => {
          console.log("Perfis excluidos!")
          alert("Perfis excluídos com sucesso!")
        })
        .catch((error) => {
          console.log("Erro ao excluir")
        })
    }

    return(
      <div>
        <hr />
        <button onClick={()=>clear()} >Excluir todos perfis?</button>        
      </div>
    )
  }  
}
export default Footer;