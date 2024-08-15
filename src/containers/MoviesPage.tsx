import React from 'react';
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";
import styles from './Main.module.css'

const MoviesPage = () => {
    return (
        <div>
            <Header/>
            <MoviesList movies={[]}/>
        </div>
    );
};

export default MoviesPage;