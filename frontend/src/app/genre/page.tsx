'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import {IGenre} from "@/models/IGenre";
import {IGenres} from "@/models/IGenres";
import Link from "next/link";
import styles from './genre_style.module.css'
import GenreIDPage from "@/app/genre/[id]/page";

const GenrePage = () => {
    const [genres,setGenres] = useState<IGenre[]>([])
    useEffect(() => {
        const fetchGenre = async () => {
            try {
                const response:IGenres = await movieService.getGenres()
                setGenres(response.genres)

            }catch (e){
                return e
            }
        }
        fetchGenre()
    }, []);

    return (
        <div className={styles.genreBox}>
            <div>
            {
                genres.map(genre => <div key={genre.id} className={styles.genre}><Link
                    href={`?with_genres=${genre.id}`}>{genre.name}</Link></div>)
            }
        </div>
            <div>
        <GenreIDPage/>
        </div>
        </div>
    );
};

export default GenrePage;