import React from 'react'
import {useState} from 'react'

// Controlar que la PW tiene entre 3 y 5 caracteres y que inicia con mayuscula
// sacan el primer caracter de la hook y lo guardan en una variable auxiliar, le aplican la propiedad upper pa convertirlo en MAYUSC. 
// Si el rsultado en esa variable auxiliar es igual al primer caracter del hook significa que es mayusc

function EjemploPassword() {
  const [password, setPassword] = useState("");
  const [longitudRequerida, setLongitudRequerida]=useState(false);
  const []

  // Guardas el estado del ingreso

  const savePassword = (e) => {
    let passwordIngresado = e.target.value 
    setPassword(passwordIngresado)
  }

  return (
    <div>
      <input type="password" value={password} onChange={(e) => {savePassword(e)}} />
      {`${password}`}
    </div>
  )
}

export default EjemploPassword