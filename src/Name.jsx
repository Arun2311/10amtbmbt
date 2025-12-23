import React, { useState } from "react";
import "./name.css"

function Name(){
    const[name,setname] = useState("Arun")

    const change = ()=>{
        setname("luffy")
    }
    return(
        <>

        <h1 className="change">Name : {name}</h1>

        <button onClick={change}>Changeee</button>

        </>
    )
}

export default Name