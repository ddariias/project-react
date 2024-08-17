'use client'
import React from 'react';
import Header from "@/components/Header";
import MoviesList from "@/components/MoviesList";
import Footer from "@/components/Footer";


const MoviesPage = () => {


    return (
        <div>
            <Header/>
            <MoviesList movies={[]}/>
        </div>
    );
};

export default MoviesPage;