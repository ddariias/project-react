import React, {FC} from 'react';
import {IMovie} from "@/models/IMovie";

type Props = {
    movies: IMovie[]
}

const MoviesList:FC<Props> = ({movies}) => {

   const baseUrlImage = 'https://image.tmdb.org/t/p/w500'

    return (
        <div>
            {
               movies && movies.map(movie => <div key={movie.id}><img src={`${baseUrlImage}${movie.backdrop_path}`}/>{movie.original_title}</div>)
            }
        </div>
    );
};

export default MoviesList;

