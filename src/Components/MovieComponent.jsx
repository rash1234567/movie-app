import React from 'react'

function MoviesComponent({title}) {
  return (
    <div className='bg-black w-[200px] h-[200px]  md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] flex items-center justify-center text-white text-[18px] md:backdrop:text-[24px]'>
       {title}
    </div>
  )
}

export default MoviesComponent;