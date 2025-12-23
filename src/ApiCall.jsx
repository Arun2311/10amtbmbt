import React, { useState } from "react";

function ApiCall(){

const[productlist,setproductlist ] = useState([])


    const handleapi = async () =>{

        let  products = await fetch("https://fakestoreapi.com/products")

        let datas  = await products.json()

        setproductlist(datas)
        
    }




    return(
        <div>

            <h1>Welcome to Our Products</h1>

<button onClick={handleapi}> Api call</button>

{productlist.map((pro)=>(

<div>


    <img height={200} width={200} src={pro.image} />

    <h1>{pro.title}</h1>
    <h4>{pro.price}</h4>


    

    </div>


))}


        </div>
    )
}


export default ApiCall