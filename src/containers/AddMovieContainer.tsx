"use client";

import React, { useState } from 'react';
import styles from './Movie_conteiner.module.css'

const AddMovieContainer = () => {
    const [movie, setMovie] = useState({
        adult: false,
        backdrop_path: '',
        genre_ids: '',
        id: 0,
        original_language: '',
        original_title: '',
        overview: '',
        popularity: 0,
        poster_path: '',
        release_date: '',
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        // Якщо це чекбокс, то беремо значення checked
        const inputValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value;

        setMovie((prev) => ({
            ...prev,
            [name]: inputValue,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Перетворюємо genre_ids з рядка у масив чисел
        const genreIdsArray = movie.genre_ids.split(",").map(Number);

        const movieData = {
            ...movie,
            genre_ids: genreIdsArray,
        };

        const response = await fetch("http://localhost:3100/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(movieData),
        });

        if (response.ok) {
            alert("Movie registered successfully!");
        } else {
            alert("Failed to register movie.");
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{maxWidth: "600px", margin: "auto"}}>
            <input className={styles.form}
                type="text"
                name="title"
                placeholder="Title"
                value={movie.title}
                onChange={handleChange}
                required
            /><br/>
            <input className={styles.form}
                type="text"
                name="original_title"
                placeholder="Original Title"
                value={movie.original_title}
                onChange={handleChange}
                required
            />
            <br/><textarea className={styles.form}
            name="overview"
            placeholder="Overview"
            value={movie.overview}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="text"
            name="backdrop_path"
            placeholder="Backdrop Path URL"
            value={movie.backdrop_path}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="text"
            name="poster_path"
            placeholder="Poster Path URL"
            value={movie.poster_path}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="text"
            name="release_date"
            placeholder="Release Date (YYYY-MM-DD)"
            value={movie.release_date}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="number"
            name="id"
            placeholder="Movie ID"
            value={movie.id}
            onChange={handleChange}
            required
        />
            <br/> <input className={styles.form}
            type="text"
            name="original_language"
            placeholder="Original Language"
            value={movie.original_language}
            onChange={handleChange}
            required
        />
            <br/> <input className={styles.form}
            type="number"
            name="popularity"
            placeholder="Popularity"
            value={movie.popularity}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="number"
            name="vote_average"
            placeholder="Vote Average"
            step="0.1"
            value={movie.vote_average}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="number"
            name="vote_count"
            placeholder="Vote Count"
            value={movie.vote_count}
            onChange={handleChange}
            required
        />
            <br/><input className={styles.form}
            type="text"
            name="genre_ids"
            placeholder="Genre IDs (comma-separated)"
            value={movie.genre_ids}
            onChange={handleChange}
            required
        />
            <div>
                <label>
                    <br/><input className={styles.form}
                    type="checkbox"
                    name="adult"
                    checked={movie.adult}
                    onChange={handleChange}
                />
                    <p className={styles.p}><b>Adult</b></p>
                </label>
            </div>
            <div>
                <label>
                    <br/><input className={styles.form}
                    type="checkbox"
                    name="video"
                    checked={movie.video}
                    onChange={handleChange}
                />
                    <p className={styles.p}><b>Video</b></p>
                </label>
            </div>
            <button className={styles.form} type="submit">Register Movie</button>
        </form>
    );
};

export default AddMovieContainer;
