import React from 'react'

function MoviesComponent({title}) {
  return (
    <div className='bg-black w-[200px] h-200px lg:w-[300px] lg:h-[300px] flex items-center justify-center text-white'>
       {title}
    </div>
  )
}

export default MoviesComponent;