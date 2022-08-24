// communicates with TMDB's API

const tmdbKey = "cad59d431f02165a5284252e0a3b950d";
const tmdbBaseUrl = "https://api.themoviedb.org/3";

const genresList = ['Adventure', 'Action', 'Animation', 'Comedy', 
'Crime', 'Thriller', 'Horror', 'Animation', 'Science Fiction'];

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
        console.log(genres)
        return genres;
      }
    } catch (error) {
      console.log(`This is the error ${error}`);
    }
  };

 getGenres();