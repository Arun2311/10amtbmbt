import React, { useEffect, useReducer, useRef, useState } from "react";
import { use } from "react";

const counterReducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return { count: state.count + 1 };
  }

  if (action.type === "DECREMENT") {
    return { count: state.count - 1 };
  }
};

export default function Hooksextra() {
  const [count, setcount] = useState(0);

  let inputref = useRef();
  // usememo is hook its used to memorize function value or return
  //  2,it only re render func when dependency change

  // usecallback is hook its used to memorize function itself
  //  2,it only re render func when dependency change
  //   const[data1,setdata1] = useState(2)

  //     const[data2,setdata2] = useState(4)

  // const heavycalculation = useCallback((a,b)=>{

  // },[data1,data2])

  // heavycalculation(data1,data2)\
  // useref is hook used acees real  dom in react
  // usestate used store  data in function comp
  // useefec its hook used for lifecycle in function com

  // usereducer is hook its advance for usestate usereducer can store data and logical functionality for state

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  useEffect(() => {
    inputref.current.focus();
  }, []);

  return (
    <div>
      <h1>Arunn</h1>
      {state.count}

      {/* <input ref={inputref} /> */}

                  <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>

    </div>
  );
}
