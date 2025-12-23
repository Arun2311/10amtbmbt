import React, { useEffect, useState } from 'react'


 function LifeCycle() {

    const[count,setcount] = useState(0)

    const [name,setname] = useState("moon")
 
    useEffect(()=>{
        console.log("Arun");

        return ()=>{
            console.log("dead");
        }
    },[name])


    const handleadd =()=>{
        setcount(count+1)
    }


    const handlename  =() =>{
        setname("sun")
    }



  return (
    <div>
      
      <h1>Hook - Useeffect </h1>

      {count} {name}

      <button onClick={handleadd}>ad</button>


      <button onClick={handlename}>Change</button>






    </div>
  )
}



export default LifeCycle