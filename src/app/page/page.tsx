'use client'
import React, {useEffect, useState} from 'react';
import {IMovies} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import {usePathname} from "next/navigation";

const PaginationPage = () => {
    const [movies, setMovies] = useState<IMovies[]>([])
    const [paginationPage, setPaginationPage] = useState(1);

    const pathname:string = usePathname()
    console.log(pathname)

    useEffect(() => {
        const fetchMovies = async (page:number) => {
            try {
                const fetch = await movieService.getPage(pathname, page)
                setMovies(fetch)
            }catch (e){

            }
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
            <button onClick={prevPage} disabled={paginationPage <= 1}>prev page</button>
            <p>{paginationPage}</p>
            <button onClick={nextPage}>next page</button>

        </div>
    );
};

export default PaginationPage;