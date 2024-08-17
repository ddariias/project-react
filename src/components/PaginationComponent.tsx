'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import {IMovies} from "@/models/IMovies";



const PaginationComponent = () => {

    const [movies, setMovies] = useState<IMovies[]>([])
    const [paginationPage, setPaginationPage] = useState(1)

    useEffect(() => {
        const fetchMovies = async (page:number) => {
            try {
                const fetch = await movieService.getPage(page)
                setMovies(fetch)
            }catch (e){

            }
console.log(paginationPage)
        }
        fetchMovies(paginationPage)
    }, [paginationPage]);

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
            <button onClick={prevPage}>prev page</button>
            <p>{paginationPage}</p>
            <button onClick={nextPage}>next page</button>
        </div>
    );
};

export default PaginationComponent;