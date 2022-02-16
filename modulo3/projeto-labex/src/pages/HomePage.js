import React from 'react';
import Header from '../Components/Header';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import sistemaSolar from "../assets/sistemaSolar.jpeg"


export const Title = styled.h2`
  display:flex;
  justify-content: center;
  font-family: 'Cedarville Cursive', cursive;
  background-image: url(${sistemaSolar});
  background-position: center;
  background-size: cover;
  height: 30vh;
  max-width:100%;
  margin-top: 50px;
`

export const ContainerButton = styled.div`
  display:flex;
  justify-content: space-evenly;
  padding: 30px;
`

export const Button = styled.button`
  background-color: orange;
  color: black;
  border-radius: 10px;
  font-weight: 600;
  height: 50px;
  :hover{
    cursor: pointer;
    background-color: #d4800284;
  }   
`



function HomePage() {
  
  const navigate = useNavigate()

  const goToListTrip = () =>{
    navigate("/trips/list")
  }

  const  adminHomePage = () => {
    navigate("/admin/trips/list")
  }

  return (
    <div>
      <Header/>
      <Title>
        <p>
          <font color = "red"> porque </font>
          <font color = "orange">o universo </font>
          <font color = "green">é seu</font>
        </p>        
      </Title>
      <ContainerButton>
        <Button onClick={goToListTrip}>Ver Viagens</Button>
        <Button onClick={adminHomePage}>Área de Administrador</Button>
      </ContainerButton>
      
    </div>
  );
}

export default HomePage;