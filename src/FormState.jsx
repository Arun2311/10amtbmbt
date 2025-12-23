import React, { useState } from 'react'

export default function FormState() {

    const[name,setname] = useState("")

    const handlename = (e) =>{
        console.log(e.target.value);
        setname(e.target.value)
    }


  return (
    <div>
      <input onChange={handlename} placeholder='enter u r name'/>

{name}

    </div>
  )
}
