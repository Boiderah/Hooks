import React from 'react'

const Moviecard = ({title="liquid metal",
 description="i have so many power, i have abidoshaker, i have lebracelamante, i have gandoser gandoser", 
 posterURL="https://www.gistreel.com/wp-content/uploads/2020/05/IMG_13052020_133201_735_x_375_pixel.jpg",
  rating="Rating:4,"}) => {
  return (
        <div className=" w-[20%] border gap-2 flex flex-col">
            <div className="flex items-center justify-center overflow-hidden w-full aspect-square border border-red-200">
                <img src={posterURL} className="w-full" alt={title} />
            </div>
        <h1 className="font-extrabold text-3xl " >{title}</h1>
        <p>{description}</p>
        <p>Rating: {rating}</p>
        </div>
    
  )
}

export default Moviecard