import React, { useState } from "react";
import Counter from "./Counter";
import Name from "./Name";
import ApiCall from "./ApiCall";
import ApiCallTwo from "./ApiCallTwo";
import Movies from "./Movies";
import LifeCycle from "./LifeCycle";
import ApiCallHooks from "./ApiCallHooks";
import FormState from "./FormState";
import DetailForm from "./DetailForm";
import ReactHookForm from "./ReactHookForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Accord from "./Accord";
import Badge from "./Badge";
import Hooksextra from "./Hooksextra";
import TodoList from "./TodoList";
import CountClass from "./CountClass";
import Home from "./Home";

function App() {
  const [close, setclose] = useState(true);

  const handleclose = () => {
    setclose(false);
  };

  return (
    // <BrowserRouter>
      <div>
        {/* 
    <h1>Arun</h1>
    <h2>ram</h2>
    <p>MDNSBH</p> */}

        {/* <Counter />

<Name/>
 */}

<h1>Click for product</h1>
        <ApiCall/>

        {/* <ApiCallTwo/> */}

        {/* 
<Movies moviename={"idlykadai"} rating={5} />

<Movies  moviename={"bison"} rating={4} />


<Movies  moviename={"kantara"}  rating={4.5}/> */}

        {/* {close ?  <LifeCycle/> : ""} */}

        <br />
        <br />

        <br />

{/* <button className="btn /btn-danger">Primary</button> */}

        {/* <button onClick={handleclose} >close</button> */}
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/form">form</Link>
          <Link to="/react-form">react-form</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Badge />} />
          <Route path="/form" element={<DetailForm />} />
          <Route path="/react-form" element={<Hooksextra />} />
        </Routes> */}

        {/* <TodoList/> */}
        {/* <CountClass/> */}

        {/* <FormState/> */}


        {/* <Home/> */}
        {/* <Counter/> */}
      </div>
    // </BrowserRouter>
  );
}

export default App;
