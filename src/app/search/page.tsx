'use client'
import React, {useEffect, useState} from 'react';
import {IMovie} from "@/models/IMovie";
import styles from './search.module.css'
import {IMovies} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import Link from "next/link";

const SearchPage = () => {

    const [movies,setMovies] = useState<IMovie[]>([])
    const [search, setSearch] = useState<string>('')
    const [results, setResults] = useState<IMovie[]>([])

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response:IMovies = await movieService.getMovies()
                setMovies(response.results)
            }catch (e){
                return e
            }
        }
        fetchMovies()
    }, []);


    const searchFunc = (e:any) =>{
        e.preventDefault();
        const response = movies.filter(movie => movie.original_title.toLowerCase().includes(search.toLowerCase()));
        setResults(response)
    }



    return (
        <div>
            <form onSubmit={searchFunc}>
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className={styles.button} type="submit">Submit</button>
            </form>

            <div>
                {
                    results.map(movie =>
                        <div className={styles.image} key={movie.id}><Link
                            href={{pathname: '/movie/' + movie.id, query: {data: JSON.stringify(movie)}}}><p>{movie.original_title}</p></Link></div>
                    )
                }
            </div>
        </div>
    );
};

export default SearchPage;