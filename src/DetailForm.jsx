import React, { useState } from "react";

function DetailForm() {
  const [name, setname] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setemail] = useState("");

  const[ishide,setishide] = useState(false)

  const handlename = (e) => {

    console.log(e.target.value);
    
    setname(e.target.value);
  };

  const handlemobile = (e) => {
    setmobile(e.target.value);
  };

  const handleemail = (e) => {
    setemail(e.target.value);
  };

  const handlehide = () =>{
    setishide(true)
  }

  return (
    <div>
      <h1>Details Form</h1>

      <form>
        <label>FirstNAME</label>
        <input onChange={handlename} placeholder="Enter" />

        <br />
        <br />
        <label>Number</label>
        <input onChange={handlemobile} type="number" placeholder="Enter" />
        <br />
        <br />
        <label>email</label>
        <input onChange={handleemail} type="email" placeholder="Enter" />
        <br />
        <br />

        <button onClick={handlehide}>Submit</button>
      </form>



{ishide ?  
      <div>
        <h1>{name}</h1>
        <h2>{mobile}</h2>
        <h2>{email}</h2>
      </div>
:""

}


    </div>
  );
}

export default DetailForm;
