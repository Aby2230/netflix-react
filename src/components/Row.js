import React from 'react'
import { useState, useEffect } from 'react'
import instance from './instance'
import './Row.css'


const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl ,isLargeRow } ) {

  const [movies, setMovies] = useState([])

  async function fetchData() {
    const request = await instance.get(fetchUrl)
    setMovies(request.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log("our movie data is ", movies);
  return (


    <div className='row'>
      <h2>{title}</h2>

      <div className='row__posters'>
        {movies.map((movie) => (
          <img
            key ={movie.id}
            className ={`row__poster ${isLargeRow && "row__posterLarge"}`}
            src= {`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name} />

        ))}
      </div>
    </div>
  )
}

export default Row
