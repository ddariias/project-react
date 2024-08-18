'use client'
import {useSearchParams} from "next/navigation";
import React, {useEffect, useState} from "react";
import {movieService} from "@/services/api.service";
import {IMovie} from "@/models/IMovie";
import {IMovies} from "@/models/IMovies";

const GenreIDPage = () => {

    console.log('jhjhjh')
const searchParams = useSearchParams()
const genre = searchParams.get('genre')
    console.log( 'sfdv',genre)

const [movies,setMovies] = useState<IMovie[]>([])

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

const [filteredMovies, setFilteredMovies] = useState<IMovie[]>([]);

useEffect(() => {
    console.log(genre);
    if (genre) {
        const filtered = movies.filter(movie => movie.genre_ids.includes(Number(genre)));
        setFilteredMovies(filtered);
        console.log(filtered);
    } else {
    }
}, [genre, movies]);

return (
    <div> jhbjhbcd

        {
           filteredMovies && filteredMovies.map(movie => <div key={movie.id}>{movie.original_title}</div>)
        }

    </div>
);
};

export default GenreIDPage;