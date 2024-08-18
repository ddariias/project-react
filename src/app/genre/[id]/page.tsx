'use client';
import {useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {movieService} from "@/services/api.service";
import {IMovie} from "@/models/IMovie";
import styles from './movies.module.css'
import Link from "next/link";
import RatingComponent from "@/components/RatingComponent";


const GenreIDPage = () => {
    const searchParams = useSearchParams();
    const genreId = searchParams.get('with_genres');

    const [movies, setMovies] = useState<IMovie[]>([]);

    const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await movieService.getMoviesByGenre(Number(genreId));
                setMovies(response.results);
            }catch (e){

            }
        };
        fetchMovies();
    }, [genreId]);


    return (
        <div className={styles.movies}>
            {
                movies && movies.map(movie => <div className={styles.image} key={movie.id}><Link href={{pathname:'/movie/' + movie.id, query: {data:JSON.stringify(movie)}}}><img src={`${baseUrlImage}${movie.backdrop_path}`}/><br/><RatingComponent vote_average={movie.vote_average}/><p>{movie.original_title}</p></Link></div>)
            }
        </div>
    );
};

export default GenreIDPage;
