import { useState } from "react";

function EjemploInput1 () {
  const [nombre,setNombre] = useState("valor por defecto");
  

  // guardo el estado en mi hook = es lo mismo a decir que guardo la variable
  const guardarNombre = (event) => {
    let nombreIngresado = event.target.value
    setNombre(nombreIngresado)
  }

return (
  <div>
    <input type="text" onChange={(event) => {guardarNombre(event)}} />
    {`${nombre}`}
  </div>
)}

export default EjemploInput1