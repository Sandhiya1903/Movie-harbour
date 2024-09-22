import React from "react";
const MovieCard=({movie})=>{
    return(
        <div className='movie'>
      <div>
      <p>{movie.Year}</p>
      <p>{movie.Type}</p>
      </div>
      <div>
      <img src={movie.Poster !== 'N/A' ? movie.Poster:'https://via.placeholder.com/400'}alt='movie.title' />
      </div>
      <div>
      <h3>{movie.Title}</h3>
      </div>
      </div>
     
    )
    
}
export default MovieCard;