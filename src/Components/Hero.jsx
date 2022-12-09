import React from 'react';
import backgroundImage from '../images/Rectangle.png'

function Heroe() {
  return (
    <div className='w-full h-[40vh] md:h-[75vh] flex items-center justify-center lg:justify-start'  style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className='lg:ml-[77px] text-white text-[28px] md:text-[72px] md:leading-[93.74px]'>
            <p>Watch</p>
            <p>Something</p>
            <p>Incredible.</p>
        </div>
    </div>
  )
}
export default Heroe