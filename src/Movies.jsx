import React from 'react'

 function Movies(props) {
  return (
    <div>
        <h1>{props.moviename}</h1>

        <h3>{props.rating}</h3>


      
    </div>
  )
}


export default Movies