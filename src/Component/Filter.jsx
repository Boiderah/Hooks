import React from 'react'
import Moviecard from './Moviecard'

const Filter = ({list, rating, title}) => {
  return (
    <div className='flex gap-x-4 flex-wrap'>
        {
            title &&
            list.filter(movie=> movie.rating>3).map((movie, index)=> (
              <Moviecard key={index} title={movie.title} posterURL={movie.image} rating={movie.rating} description={movie.description}/>
            ))
        }
        {
        rating &&
            list.filter(movie=> movie.rating<3).map((movie, index)=> (
              <Moviecard key={index} title={movie.title} posterURL={movie.image} rating={movie.rating} description={movie.description}/>
            ))
        }
        </div>
  )
}

export default Filter