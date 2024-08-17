'use client'
import React, {useState} from 'react';
import {IMovie} from "@/models/IMovie";
import styles from './search.module.css'

const SearchPage = () => {

    const [movies,setMovies] = useState<IMovie[]>([])
    const [search,setSearch]= useState<IMovie[]>([])

    const searchFunc = () =>{
        const search = movies.filter(movie => movie.original_title.search)
        setSearch(search)
    }



    return (
        <div>
        <form onSubmit={searchFunc}>
            <input type="text"/>
            <button className={styles.button}>submit</button>
        </form>

            {/*{*/}
            {/*    movies.map(movie => {movie.original_title})*/}
            {/*}*/}
        </div>
    );
};

export default SearchPage;