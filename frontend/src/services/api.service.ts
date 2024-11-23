import {IMovies} from "@/models/IMovies";
import {IGenres} from "@/models/IGenres";

const baseUrl = 'https://api.themoviedb.org/3'

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzViMGZkOTc0MGU1OTEzOGVkMjYwNDUyOTYxY2VjOSIsIm5iZiI6MTcyMzQ1Njg0NS44MzA2MTgsInN1YiI6IjY2YjlkYWRjZmJmYmQwM2E5M2JkYzA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8p5fQmgk4AzutACpHuc2reSMwMVuafc98C-2k2gVgvY'


export const movieService = {
    getMovies: async (): Promise<IMovies> => {
        const response = await fetch(`${baseUrl}` + '/' + 'discover/movie',
            {headers: {'Authorization': 'Bearer ' + `${token}`}})
            .then(value => value.json())
        return response
    },
    getPage: async (paginationPage: number): Promise<IMovies> => {
        const response = await fetch(`${baseUrl}` + '/' + `discover/movie?page=${paginationPage}`,
            {headers: {'Authorization': 'Bearer ' + `${token}`}})
            .then(value => value.json())
        return response
    },
    getGenres: async (): Promise<IGenres> => {
        const response = await fetch(`${baseUrl}` + '/' + 'genre/movie/list',
            {headers: {'Authorization': 'Bearer ' + `${token}`}})
            .then(value => value.json())
        return response
    },
    getMoviesByGenre: async (genreId: number): Promise<IMovies> => {

            const response = await fetch(`${baseUrl}/discover/movie?with_genres=${genreId}`, {
                headers: { 'Authorization': `Bearer ${token}` }})
                .then(value => value.json())
                return response

    },
}
