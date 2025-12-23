import React, { useEffect, useState } from 'react'
import CardComp from './CardComp'

export default function ApiCallHooks() {

const[apiproducts , setapiproducts] = useState([])

    const handlefetch = async ()=>{
        let data = await fetch("https://fakestoreapi.com/products")
        let products = await data.json()
        setapiproducts(products)
    }


    useEffect(()=>{
        console.log("DSds");
        handlefetch()
    },[])




  return (
    <div>
      

      <h1>Arun</h1>

      {apiproducts.map(()=>(

        <CardComp data={data}/>


      ))}
    </div>
  )
}
