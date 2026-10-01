import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { describe, it, expect } from 'vitest';
import MovieCard from './MovieCard';
import type { Movie } from '../types';

const mockMovie: Movie = {
  id: 1,
  title: 'Jurassic Park',
  overview: 'A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs.',
  poster_path: '/poster.jpg',
  release_date: '1993-06-11',
  vote_average: 7.9,
};

describe('MovieCard', () => {
  it('renders movie details correctly', () => {
    render(<MovieCard movie={mockMovie} />);
    
    expect(screen.getByText('Jurassic Park')).toBeInTheDocument();
    expect(screen.getByText(/1993-06-11/)).toBeInTheDocument();
    expect(screen.getByText(/7.9/)).toBeInTheDocument();
    expect(screen.getByText(/A wealthy entrepreneur/)).toBeInTheDocument();
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://image.tmdb.org/t/p/w500/poster.jpg');
    expect(image).toHaveAttribute('alt', 'Jurassic Park');
  });

  it('renders placeholder image when poster_path is null', () => {
    const movieWithoutPoster = { ...mockMovie, poster_path: null };
    render(<MovieCard movie={movieWithoutPoster} />);
    
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', 'https://via.placeholder.com/250x375?text=No+Image');
  });
});
