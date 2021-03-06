import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import {imageURL, API_KEY} from '../../constants/constants'
import YouTube from 'react-youtube';

function RowPost(props) {
  const [movieList, setMovieList] = useState([])
  const [urlId, setUrlId] = useState()
  useEffect(() => {
   axios.get(props.url).then((response)=>{
     console.log(response.data)
     setMovieList(response.data.results)
   }).catch(err=>{
    console.log("Network error")
  })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie=(id)=>{
console.log(id);
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
    <div className='rowPost'>
        <h2>{props.title}</h2>
        <div className="posters">
         
          {movieList.map((obj,i)=>{
            return(
              <div key={i}>
              <img onClick={()=>{handleMovie(obj.id)}} className={props.isSmall ?'smallPoster':'poster'}  src={`${imageURL+obj.backdrop_path}`} alt="card" />
           </div>
            )
           
          })}
        
        </div>
       { urlId && <YouTube videoId={urlId.key} opts={opts} />} 
    </div>
  )
}

export default RowPost