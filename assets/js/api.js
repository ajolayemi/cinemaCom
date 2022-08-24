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

getGenres().then(addGenres)