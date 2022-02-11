import React from 'react';

function Header(props) {

  if(props.condicionalCabecalho==="Home"){
    return(
      <div>
        <header>          
          <h2>AstroMatch</h2>
          <button onClick={props.goToMatchList} > MatchList </button>
          <hr />          
        </header>        
      </div>      
    );
  }else{
    return(
      <div>
        <header>          
          <button onClick={props.goToHome} > Home </button>
          <h2>AstroMatch</h2>          
          <hr />          
        </header>        
      </div>      
    );
  } 
}
export default Header;