import React from 'react'
import { movieIdPageParams } from '@lib/types'
import { movieDB } from '@lib/movieDB';
import { Icon, IconStar } from '@tabler/icons-react';


export default function MovieIdPage({params}:movieIdPageParams) {
    const id = Number(params.id);
    const selectedMovie = movieDB.find((movie)=>movie.id===id)
    if(!selectedMovie){
        return <p className='text-center'>Movie is not found</p>
    }
  return (
    <div>
        <img src={selectedMovie?.imgSrc }alt="100px" width="200"/>
        <div>
            <p>{selectedMovie?.title}</p>
            <p>{selectedMovie?.detail}</p>
            <span> 
                <IconStar size={35}/>
                    {selectedMovie?.rating}
            </span>
        </div>
        MovieId{params.id}
    </div>
  )
}
