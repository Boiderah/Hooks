import React from 'react'
import Moviecard from './Moviecard'

const Movielist = ({list}) => {
  return (
    <div>
        <h1>Movie List</h1>
        <div>
          {list.map((movie, index)=> (
            <Moviecard key={index} title={movie.title} posterURL={movie.image} rating={movie.rating} description={movie.description}/>
          ))}
        </div>
    </div>
  )
}

export default Movielist