import React from 'react';
import Header from './Header';
import CardMatchs from "./CardMatchs"
import Footer from './Footer';

function MatchList(props) {  
  
  return (
    <div>
      <Header goToHome={props.goToHome}/>

      <h1>MatchList</h1>

      <CardMatchs />

      <Footer/>
    </div>    
  );
}
export default MatchList;