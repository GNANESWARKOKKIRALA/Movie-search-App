
import SearchBox from './components/SearchBox';
import Controls from './components/Controls';
import MovieList from './components/MovieList';
import Pagination from './components/Pagination';
import { useMovies } from './hooks/useMovies';
import './App.css';

function App() {
  const {
    movies,
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
  } = useMovies();

  return (
    <div className="container">
      <SearchBox onSearch={handleSearch} initialQuery={query} />
      
      <Controls 
        sortOption={sortOption} 
        onSortChange={setSortOption} 
        minRating={minRating} 
        onRatingChange={setMinRating} 
      />

      {error && <div className="error">{error}</div>}
      
      {loading ? (
        <div className="loading">Loading movies...</div>
      ) : !error ? (
        <>
          <MovieList movies={movies} />
          <Pagination 
            currentPage={page} 
            totalPages={totalPages} 
            onPageChange={setPage} 
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
