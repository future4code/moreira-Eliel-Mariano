import React from 'react';
import styled from 'styled-components';
//import nuvem from "../nuvem.jpg"



export const ContainerHeader = styled.div`
  display:flex;
  align-items: center;
  justify-content: flex-start;
  height: 50px;
  width: 100vw;
  /* position: fixed;
  top: 0;
  left: 5px;
  background-color: white; */
  `

function Header() {

  return (
    <ContainerHeader>
        <h1>
          <font color = "red">La</font>
          <font color = "orange">be</font>
          <font color = "green">X</font>     
        </h1>
    </ContainerHeader>
  );
}

export default Header;