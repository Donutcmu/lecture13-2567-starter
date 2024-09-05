import { movieDB } from '@lib/movieDB'
import React from 'react'
import MovieRow from '@components/MovieRow'

export default function page() {
  return (
    <div>
        <p className="m-4 fw-bold fs-4 text-center">Top 10 movie</p>
        <div className='mx-auto vstack gap-2' style={{width:"70%"}}>
            {movieDB.map((movie,i)=>(
                <MovieRow
                key = {movie.id}
                id = {movie.id}
                title = {movie.title}
                number={i+1}
                rating = {movie.rating}
                />
        ))}
        </div>
        movie
    </div>
  )
}
