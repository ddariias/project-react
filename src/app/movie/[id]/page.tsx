import React from 'react';

const MovieWithIdPage = ({searchParams}: any) => {
    const movie = JSON.parse(searchParams.data)

    return (
        <div>
            {movie.overview}
        </div>
    );
};

export default MovieWithIdPage;