import { useState } from 'react'
import './App.css'
import Moviecard from './Component/Moviecard'
import data from './data'
import Movielist from './Component/Movielist'
import Filter from './Component/Filter'

function App() {
  const [movies, setMovies] = useState(data)
  const [filter, setFilter] = useState()
  const [title, setTitle] = useState()
  const [rating, setRating] = useState()


  console.log(movies);
  function handleTitle(e) {
    setTitle(e.target.value)
    setFilter(e.target.value)
    setRating('')
  }
  function handleRating(e) {
    setRating(e.target.value)
    setFilter(e.target.value)
    setTitle('')
  }

  return (
   <>
   <input type="text" placeholder='filter by title' value={title} onChange={handleTitle} />
   <input type="number" placeholder='filter by rating' value={rating} onChange={handleRating} />
   {/* <div className=''>
    <p>Add movie</p>
    <form onSubmit={handleSubmit} className=''>
      <input type="text" placeholder='Title' value={newmovie.title} onChange={(e) => setNewMovie({...newmovie, title: e.target.value})}/>
      <input type="text" placeholder='Description' value={newmovie.description} onChange={(e) => setNewMovie({...newmovie, title: e.target.value})}/>
      <input type="text" placeholder='Paste image Url' value={newmovie.posterURL} onChange={(e) => setNewMovie({...newmovie, title: e.target.value})}/>
      <input type="number" placeholder='Rating' value={newmovie.rating} onChange={(e) => setNewMovie ({...newmovie, rating})}/>
      <button>Add</button>
    </form>

   </div> */}
   {

   filter?<Filter title={title} rating={rating} list={movies} />:<Movielist list={movies}/>
   }
   </>
  )
}

export default App
