const API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;

const requests = {
  getTrendingMovies: `trending/movie/day?api_key=${API_KEY}&language=en-US`,
  getActionMovies: `discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
  getComedyMovies: `discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=35`,
  getHorrorMovies: `discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=27`,
  getRomanceMovies: `discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=10749`,
  getDocumentaries: `discover/movie?api_key=${API_KEY}&include_adult=true&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=99`,
};

export const BASE_URL = import.meta.env.VITE_REACT_APP_TMDB_BASE_IMAGE_URL;

export default requests;
