import React, { useState } from 'react'

export const InputPassword= () => {

  const [password,setPassword] = useState();


  return (
    <div>
      <input style={{margin:"10px"}} type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
      {`${password}`}
    </div>
  )
}
