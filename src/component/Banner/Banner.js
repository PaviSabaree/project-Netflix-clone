import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {imageURL,trending,API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';

function Banner() {
const [movie, setMovie] = useState({})
const [urlId, setUrlId] = useState()
 useEffect(() => {
  axios.get(trending).then((response)=>{
    console.log(response.data)
    setMovie(response.data.results.sort(function(a,b){return 0.5-Math.random()})[0])
  }).catch(err=>{
    console.log("Network error")
  })
 }, [])

 const opts = {
  height: '448',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};
const handleBanner=(id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
    console.log(response.data);
    if(response.data.results.length!==0){
  setUrlId(response.data.results[0])
    }else{
      console.log("Array not available");
    }
  })
}
  
  return (
    <div style={{backgroundImage:`url(${imageURL+movie.backdrop_path})`}} className='banner'>
       { urlId && <YouTube videoId={urlId.key} opts={opts} />} 
        <div className="container">
            <h1 className='title'>{movie ? movie.title:''}</h1>
            <div className="buttonContainer">
                <button onClick={()=>{handleBanner(movie.id)}} className='button'>Play</button>
                <button className='button'>My list</button>
            </div>
            <p className='description'>{movie.overview}</p>
        </div>
        <div className="fadeBottom"></div>
    </div>
  )
}

export default Banner