import React from 'react';
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <MoviesList movies={[]}/>
        </div>
    );
};

export default MoviesPage;