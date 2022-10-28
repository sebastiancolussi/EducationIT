import React from 'react';

const styleH1 = {
  
  color:"black",
  fontSize:"40px"
}

const styleParrafoGrande = {
  color:"black",
  fontSize:"30px"
}

const styleParrafoChico = {
  color:"grey",
  fontSize:"16px"
}

const TituloConMuchosEstilos2 = () => {
  return (
    <>
  <h1 style={styleH1}>Cuatro Zapatos con motor eletrico para caminar mas rapido</h1>
  <p style={styleParrafoGrande}>La tecnologia</p>
  <p style={styleParrafoChico}>28 de Octubre de 2022</p>

  </>
  
)}

export default TituloConMuchosEstilos2