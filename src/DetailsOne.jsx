import React from 'react'

export default function DetailsOne({a,b}) {

  console.log(a);
  
  return (
    <div>
      <h1>name - {a.name} </h1>
            <h1>age -{a.age} </h1>
                        <h1>phone - {b.phone} </h1>


    </div>
  )
}
