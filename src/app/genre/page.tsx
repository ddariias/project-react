'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import {IGenre} from "@/models/IGenre";
import {IGenres} from "@/models/IGenres";
import Link from "next/link";
import styles from './genre_style.module.css'
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";

const GenrePage = () => {

    const [genres,setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response:IGenres = await movieService.getGenres()
                setGenres(response.genres)

            }catch (e){
                return e
            }
        }
        fetchGenre()
    }, []);

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

    const filteredMoviesByGenre = (genreId: number) => {
        return movies.filter(movie => movie.genre_ids.includes(genreId));
    }


    return (
        <div>
            {
                genres.map(genre =><div className={styles.gender}><Link href={'/genre/movie/list'}>{genre.name}</Link></div>)
            }

        </div>
    );
};

export default GenrePage;