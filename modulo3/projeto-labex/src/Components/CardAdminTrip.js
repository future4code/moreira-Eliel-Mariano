import React from 'react';
import { useProtectedPage } from '../CustonHooks/CustonHooks';

function CardAdminTrip(props) {
  
  useProtectedPage()
  
  return (
    <div>
      <h2><strong>Lista de viagens </strong></h2>

      {props.listName}
      
    </div>
  );
}
export default CardAdminTrip;