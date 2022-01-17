import React from 'react'

export function Etapa1() {
  return (
    <div>
        <h1>ETAPA 1: DADOS GERAIS</h1>

        <h2>1 - qual seu nome?</h2>
        <input placeholder='digite seu nome'/>

        <h2>2 - qual sua idade?</h2>
        <input placeholder='digite sua idade'/>

        <h2>3 - qual seu e-mail?</h2>
        <input placeholder='digite seu e-mail'/>

        <h2>4 - qual sua escolaridade?</h2>
        {/* <input placeholder='digite sua escolaridade'/> */}
            <select>
                <option>Ensino médio</option>
                <option>Ensino médio técnico</option> 
                <option>Ensino superior</option>
                
            </select>
      
    </div>
  );
}

//export default etapa1;
