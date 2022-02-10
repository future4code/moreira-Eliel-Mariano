import axios from 'axios';
import React from 'react';
import { useState } from 'react';

function Footer() {

  const [profileLiked, setProfileLiked] = useState()


  const ChoosePerson = () => {
    const headers = { headers: {'Content-Type': 'application/json'}}
    const body = {id: "71gMbZs2txS9LDvGK5Ew", choice:true}

    axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/choose-person",
    body, headers)
      .then((response) => {
        console.log(response.data)          
      })
      .catch((error) => {
        console.log("Erro")
      })
  }

  ChoosePerson()


  /* const clickLike = () => {
    const liked = true
        
    return

  } */
  


  return (
    <div>      
      <footer>
        
        <hr />

        <button>Deslike</button>
        <button>Like</button>

      </footer>
    </div>
    
  );
}

export default Footer;