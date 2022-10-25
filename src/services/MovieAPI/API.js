import axios from 'axios';

const API_KEY = '940ab4cf38b67674834ef4ee6a4ce510';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export async function getMovies() {
  const { data } = await axios.get(`/3/trending/all/day`, {
    params: { api_key: API_KEY },
  });
  return data;
}

export async function getMovieDetails(id) {
  const { data } = await axios.get(`/3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  return data;
}
