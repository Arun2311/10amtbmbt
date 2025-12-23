import React, { useState } from "react";
import DetailsOne from "./DetailsOne";
import CardComp from "./CardComp";

export default function Home() {
  const [data, setdata] = useState({
    name: "arun",
    age: 24,
  });

    const [one, setone] = useState({
    phone: "327783827"
  });

  return (
    <div>
      <h1>Data 1</h1>

      {/* <DetailsOne a={data} b ={one} /> */}

      <CardComp/>

    </div>
  );
}
