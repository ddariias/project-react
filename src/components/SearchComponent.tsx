'use client'
import React, {useState} from 'react';
import styles from './Components.module.css'
import {IMovie} from "@/models/IMovie";

const SearchComponent = () => {

    const [movies,setMovies] = useState<IMovie[]>([])
    const [search,setSearch]= useState<IMovie[]>([])

    const searchFunc = () =>{
        const search = movies.filter(movie => movie.original_title.search)
        setSearch(search)
    }



    return (
        <form onSubmit={searchFunc}>
            <input type="text"/>
            <button className={styles.button}>submit</button>
        </form>
    );
};

export default SearchComponent;