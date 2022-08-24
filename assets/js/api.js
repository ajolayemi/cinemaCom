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
        return genres;
      }
    } catch (error) {
      throw new Error(error);
    }
  };

// Returns an object where the keys are genre's ID and values are their ID's
const getGenresId = async () => {
    try {
        const genresFromTmdb = await getGenres();
        const toReturn = {};
        // Loop over the returned array
        genresList.forEach((genre) => {
            const genreObj = genresFromTmdb.filter(obj => obj.name == genre);
            const genreId = genreObj.length > 0 ? genreObj[0].id : null;

            toReturn[genreId] = genre
        }) 
        return toReturn;
    } catch (error) {
        console.log('Error')
    }
}

getGenresId()