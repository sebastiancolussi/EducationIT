import React, { useState } from 'react'

export const InputNombre = () => {

  const [nombre,setNombre] = useState();


  return (
    <div>
      <input style={{margin:"10px"}} type="text" placeholder='Nombre o Email o Telefono' value={nombre} onChange={(e)=>{setNombre(e.target.value)}}></input>
      {`${nombre}`}
    </div>
  )
}
