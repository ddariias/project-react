import React from 'react';
import styles from './id.module.css'

const MovieWithIdPage = ({searchParams}: any) => {
    const movie = JSON.parse(searchParams.data)
    const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div className={styles.info}>
            <h1>{movie.original_title}</h1>
            <div><img src={`${baseUrlImage}${movie.backdrop_path}`} alt=""/></div>
           <div className={styles.overview}>{movie.overview}</div>
        </div>
    );
};

export default MovieWithIdPage;