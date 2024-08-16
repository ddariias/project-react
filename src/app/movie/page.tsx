'use client'
import React, {useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import MoviesList from "@/components/MoviesList";
import Header from "@/components/Header";


const MoviesPage = () => {

    const [movies,setMovies] = useState<IMovie[]>([])
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response:IMovies = await movieService.getMovies()
                setMovies(response.results)
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