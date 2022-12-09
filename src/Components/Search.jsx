import React, { useEffect,useState } from 'react'
import axios from 'axios'


function Search() {
    const [movies,setMovies] = useState([]);
    const [series,setSeries] = useState([]);
    const [input,setInput] = useState('');

    const movieSearch_url = `https://www.omdbapi.com/?s=Batman&type=movie&page=2&apikey=25cc34`;
    const seriesSearch_url =`https://www.omdbapi.com/?s=batman&type=series&page=2&apikey=25cc34`;

    useEffect(() => {
      axios.get(movieSearch_url).then(res=> setMovies( res.data.Search))
      axios.get(seriesSearch_url).then(res=> setSeries( res.data.Search))
    
     
    }, [input]) 

  return (
    <div className='w-[100vw] pl-[28] py-[50px] md:pl-[67px] md:py-[67px]'>
        <form className='w-full px-[10px] flex flex-col'>
            <label >Search</label>
            <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} className='w-[95%] border-[1px] border-solid border-black' />
        </form>
        <h5>Movies</h5>
        <h5>Series</h5>
    </div>
    
  )
}
export default Search