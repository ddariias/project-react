'use client'
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import {IGenre} from "@/models/IGenre";
import {IGenres} from "@/models/IGenres";
import Link from "next/link";
import styles from './genre_style.module.css'

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
        <div>
            {
                genres.map(genre => <div key={genre.id} className={styles.gender}><Link
                    href={`/?genre=${genre.id}`}>{genre.name}</Link></div>)
            }


        </div>
    );
};

export default GenrePage;