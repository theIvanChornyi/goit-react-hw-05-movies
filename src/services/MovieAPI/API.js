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
export async function getCast(id, signal) {
  const { data } = await axios.get(`/3/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
    signal,
  });
  return data;
}

export async function getReview(id) {
  const { data } = await axios.get(`/3/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  return data;
}
export async function getMovieByName(query, page) {
  const { data } = await axios.get(`/3/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page,
      query,
    },
  });
  return data;
}
