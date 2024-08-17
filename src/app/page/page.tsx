'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import {usePathname, useRouter} from "next/navigation";
import {IMovie} from "@/models/IMovie";
import MoviesList from "@/components/MoviesList";
import styles from './pagination.module.css'

const PaginationPage = () => {
    const [movies, setMovies] = useState<IMovie[]>([])
    const [paginationPage, setPaginationPage] = useState(1);
    const router = useRouter();

    useEffect(() => {
        const fetchMovies = async (paginationPage:number) => {
            try {
                const fetch = await movieService.getPage(paginationPage)
                setMovies(fetch.results)
            }catch (e){

            }
        }
        fetchMovies(paginationPage)
        router.push(`/movie?page=${paginationPage}`);
    }, [paginationPage, router]);

    const prevPage = () => {
        if(paginationPage > 1){
            setPaginationPage(value => value - 1)
        }
    }
    const nextPage = () => {
        setPaginationPage(value => value + 1)
    }

    return (
        <div>
            <MoviesList movies={movies}/>
            <div className={styles.pagination}>
            <button onClick={prevPage} disabled={paginationPage <= 1}>prev page</button>
            <p>{paginationPage}</p>
            <button onClick={nextPage}>next page</button>
            </div>
        </div>
    );
};

export default PaginationPage;