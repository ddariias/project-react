import React from 'react';
import styles from './id.module.css'
import RatingComponent from "@/components/RatingComponent";

const MovieWithIdPage = ({searchParams}: any) => {
    const movie = JSON.parse(searchParams.data)
    const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className={styles.info}>
            <h1>{movie.original_title}</h1>
            <div className={styles.imgWithDetails}><img src={`${baseUrlImage}${movie.backdrop_path}`} alt="Photo"/>
                <div className={styles.rating}><h3>Rating</h3><RatingComponent vote_average={movie.vote_average}/>
                    <h3>Genre</h3>{movie.genre_ids}
                    <h3>Release date</h3>{movie.release_date}
                </div>
            </div>
           <div className={styles.overview}><h3>Overview</h3>{movie.overview}</div>
        </div>
    );
};

export default MovieWithIdPage;