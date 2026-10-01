import React from 'react';
import type { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const posterUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/250x375?text=No+Image';

  return (
    <div className="movie-card" data-testid="movie-card">
      <img src={posterUrl} alt={movie.title} className="movie-poster" />
      <div className="movie-info">
        <h2 className="movie-title">{movie.title}</h2>
        <div className="movie-meta">
          <span>RELEASE DATE: {movie.release_date || 'Unknown'}</span>
          <span>RATING: {movie.vote_average || 'N/A'}</span>
        </div>
        <p className="movie-overview">{movie.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;
