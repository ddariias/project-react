export const fetchService = async () => {
    const response = await fetch('https://api.themoviedb.org/3/discover/movie', {headers: {'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YzViMGZkOTc0MGU1OTEzOGVkMjYwNDUyOTYxY2VjOSIsIm5iZiI6MTcyMzQ1Njg0NS44MzA2MTgsInN1YiI6IjY2YjlkYWRjZmJmYmQwM2E5M2JkYzA4MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8p5fQmgk4AzutACpHuc2reSMwMVuafc98C-2k2gVgvY'}})
        .then(value => value.json())
        return response
}

export const movieService = {
    getMovies: async ():Promise<any> => {
        const fetch = await fetchService()
        return fetch
    }
}
