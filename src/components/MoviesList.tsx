'use client'
import React, {useEffect, useState} from 'react';

import {movieService} from "@/services/api.service";

interface IMovie{
    id:number,
    title: string
}
interface IInfo{
    page: number,
    results: IMovie[]
}


const MoviesList = () => {
    const [movies,setMovies] = useState<IMovie[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response:IInfo = await movieService.getMovies()
                setMovies(response.results)
            }catch (e){
                return e
            }

        }
        fetchMovies()
    }, []);

    console.log(movies);

    return (
        <div>
            {
               movies && movies.map(movie => <div key={movie.id}>{movie.title}</div>)
            }
        </div>
    );
};

export default MoviesList;

