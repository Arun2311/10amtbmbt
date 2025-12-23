import React from "react";
import { useForm } from "react-hook-form";
import luffy from "./assets/luffy123.webp"



export default function ReactHookForm() {
  const { register, handleSubmit } = useForm();

  const onsubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 style={{color:"green" , backgroundColor:"black" ,textAlign:"center"}} >Hook Form</h1>

      <img src={luffy}/>

      <input {...register("fname")} placeholder="enter" />




      <button onClick={handleSubmit(onsubmit)}>submit</button>



      
    </div>
  );
}
