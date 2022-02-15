import React from 'react';
import styled from 'styled-components';
import nuvem from "../nuvem.jpg"


export const Slogan = styled.h1`
    font-family: 'Cedarville Cursive', cursive;
`
export const ContainerHeader = styled.div`
    display:flex;
    align-items: center;
    justify-content: flex-start;
    background-image: url(${nuvem});
`


function Header() {

  return (
    <ContainerHeader>
        <h1>
          <font color = "red">La</font>
          <font color = "orange">be</font>
          <font color = "green">X</font>     
        </h1>
        <Slogan>
          <font color = "red">, porque </font>
          <font color = "orange">o universo </font>
          <font color = "green">é seu</font>
        </Slogan>
    </ContainerHeader>
  );
}

export default Header;