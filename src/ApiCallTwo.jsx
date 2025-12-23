import React, { useEffect, useState } from "react";

function ApiCallTwo(){
    const [postdata ,setpostdata] = useState([])




const handlepostapi = async  ()=>{
    let postdata = await fetch("https://jsonplaceholder.typicode.com/posts")
    let data  = await postdata.json()
    setpostdata(data)
}


useEffect(()=>{
    handlepostapi()


    return ()=>{
        console.log(
        
        "DSds"
        );
        
    }
},[count])




    return(
        <div>


            <h1>Api call 2</h1>

            <button onClick={handlepostapi}>call</button>

            {postdata.map((post)=>(

                <div>
                
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>





                    </div>

            ))}






        </div>
    )
}

export default ApiCallTwo