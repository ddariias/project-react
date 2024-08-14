'use client'
import React, {useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import MoviesList from "@/components/MoviesList";


const MoviesPage = () => {

    const [movies,setMovies] = useState<IMovie[]>([])
    console.log(movies);
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response:IMovies = await movieService.getMovies()
                setMovies(response.results)
                console.log(response.results);
            }catch (e){
                return e
            }

        }
        fetchMovies()
    }, []);

    return (
        <div>
            <MoviesList movies={movies}/>
        </div>
    );
};

export default MoviesPage;