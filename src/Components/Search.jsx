import React, { useEffect,useState } from 'react'
import MovieCarousel from './Carousel';


function Search() {
    const [movies,setMovies] = useState([]);
    const [series,setSeries] = useState([]);
    const [input,setInput] = useState('');

    const movieSearch_url = `https://www.omdbapi.com/?s=${input}&type=movie&page=2&apikey=25cc34`;
    const seriesSearch_url =`https://www.omdbapi.com/?s=${input}&type=series&page=2&apikey=25cc34`;


    const newSearch = (e)=>{
        e.preventDefault()
        fetch(movieSearch_url).then(res=> res.json()).then(data => setMovies(data.Search)) 
        fetch(seriesSearch_url).then(res=> res.json()).then(data => setSeries(data.Search))
    }

  return (
    <div className='w-[100vw] pl-[50px] py-[50px] md:pl-[67px] md:py-[67px]'>
        <form className='w-full px-[10px] flex flex-col mb-6' onSubmit={newSearch}>
            <label className='text-[16px] md:text-[24px]' >Search</label>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='w-[95%] border-[1px] border-solid border-black' />
        </form>
            
           { movies.length > 0 && <>
            <h5 className='text-[18px] md:text-[24px] mb-2 md:mb-3'>Movies</h5>
            <MovieCarousel search={movies}/>
            <h5 className='text-[18px] md:text-[24px] mb-2 md:mb-3 mt-6'>Series</h5>
            <MovieCarousel search={series}/>
            </>}
    </div>
  )
}
export default Search