'use client'
import React, {useEffect, useState} from 'react';
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";


const MoviesPage = () => {

    const [movies, setMovies] = useState<any[]>([]);

    useEffect(() => {
        fetch("http://localhost:3100/movie")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => console.error("Error fetching movies:", error));
    }, []);

    return (
        <div>
            <Header/>
            <MoviesList movies={[]}/>
        </div>
    );
};

export default MoviesPage;