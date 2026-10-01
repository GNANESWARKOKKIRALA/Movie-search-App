import type { ApiResponse } from '../types';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY || ''; // Fallback for dev
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async (query: string, page: number): Promise<ApiResponse> => {
  if (!API_KEY) {
    console.warn("API key is missing. Please add VITE_TMDB_API_KEY to your .env file.");
  }
  
  const url = query 
    ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&page=${page}`
    : `${BASE_URL}/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc&page=${page}`; // Fallback to popular movies when query is empty

  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }

  return response.json();
};
