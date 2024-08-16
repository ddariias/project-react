import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";
import styles from './Components.module.css'
import PaginationComponent from "@/components/PaginationComponent";
import Link from "next/link";
import RatingComponent from "@/components/RatingComponent";

type Props = {
    movies: IMovie[]
}

const MoviesList:FC<Props> = ({movies}) => {

    const baseUrlImage = 'https://image.tmdb.org/t/p/w500'



    return (
        <div className={styles.container_movie} >
            {
                movies && movies.map(movie => <div className={styles.image} key={movie.id}><Link href={{pathname:'/movie/' + movie.id, query: {data:JSON.stringify(movie)}}}><img src={`${baseUrlImage}${movie.backdrop_path}`}/><br/><RatingComponent vote_average={movie.vote_average}/><p>{movie.original_title}</p></Link></div>)
            }
        </div>
    );
};

export default MoviesList;

