import React from 'react';
import type { Movie } from '../types';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (movies.length === 0) {
    return <div className="no-results">No movies found. Try another search!</div>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
