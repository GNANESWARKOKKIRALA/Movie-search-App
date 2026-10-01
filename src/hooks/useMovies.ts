import { useState, useEffect } from 'react';
import type { Movie, SortOption } from '../types';
import { fetchMovies } from '../services/api';

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState('Jurassic Park');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [sortOption, setSortOption] = useState<SortOption>('none');
  const [minRating, setMinRating] = useState<number>(0);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchMovies(query, page);
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages, 500)); // TMDB limits to 500 pages max
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, [query, page]);

  // Client-side filtering and sorting
  const processedMovies = movies
    .filter(movie => movie.vote_average >= minRating)
    .sort((a, b) => {
      if (sortOption === 'release_date.desc') {
        return new Date(b.release_date || 0).getTime() - new Date(a.release_date || 0).getTime();
      }
      if (sortOption === 'release_date.asc') {
        return new Date(a.release_date || 0).getTime() - new Date(b.release_date || 0).getTime();
      }
      if (sortOption === 'vote_average.desc') {
        return b.vote_average - a.vote_average;
      }
      if (sortOption === 'vote_average.asc') {
        return a.vote_average - b.vote_average;
      }
      return 0; // none
    });

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    setPage(1); // Reset to first page on new search
  };

  return {
    movies: processedMovies,
    loading,
    error,
    page,
    totalPages,
    setPage,
    handleSearch,
    sortOption,
    setSortOption,
    minRating,
    setMinRating,
    query
  };
};
