import React from 'react';

function CardAdminTrip(props) {      
  return (
    <div>
      <h2><strong>Lista de viagens </strong></h2>

      {props.listName}
      
    </div>
  );
}
export default CardAdminTrip;