import React from 'react'
import { InputNombre } from './EjemplosDelInput/InputNombre'
import { InputPassword } from './EjemplosDelInput/InputPassword'

const formstyles ={
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  width:"400px",
  height:"300px",
  backgroundColor:"#e7e7e7",
  margin:"10px"
  
}

export const Formulario = () => {
  return (
    <div style={formstyles}>
      <InputNombre />
      <InputPassword />
    </div>
  )
}
