import React, { useState ,useContext} from "react";
import Food from "./Food";
import { CounterContext } from "./CounterContext";



function Counter() {

  let {count,incremnt} = useContext(CounterContext)

  return (
    <div>
      <h1 >Counter - {count} </h1>

    <button onClick={incremnt}>change</button>
    </div>
  );
}

export default Counter;
