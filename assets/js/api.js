// communicates with TMDB's API

const tmdbKey = "cad59d431f02165a5284252e0a3b950d";
const tmdbBaseUrl = "https://api.themoviedb.org/3";


// Gets list of genres from TMDB's site
const getGenres = async () => {
    const genreRequestEndPoint = "/genre/movie/list";
    const requestParams = `?api_key=${tmdbKey}`;
    const urlToFetch = `${tmdbBaseUrl}${genreRequestEndPoint}${requestParams}`;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const genres = jsonResponse.genres;
        return genres;
      }
    } catch (error) {
      throw new Error(error);
    }
  };


// Gets a list of trending movies and returns the id of a random trending movie
const getTrendingMovies = async () => {
    const trendingRequestEndpoint = "/trending/movie/day";
    const requestParams = `?api_key=${tmdbKey}`;
    const trendingUrl = `${tmdbBaseUrl}${trendingRequestEndpoint}${requestParams}`
    try {
        const response = await fetch(trendingUrl);
        if (response.ok) {
            const toJson = await response.json();
            const trendings = toJson.results;
            const randomInt = Math.floor(Math.random() * trendings.length);
            return trendings[randomInt].id;
        }
    } catch (error) {
        throw new Error(error);
    }
}

getGenres().then(addGenres)