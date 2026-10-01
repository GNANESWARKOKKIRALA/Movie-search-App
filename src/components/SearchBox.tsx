import React, { useState } from 'react';

interface SearchBoxProps {
  onSearch: (query: string) => void;
  initialQuery?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form className="header" onSubmit={handleSubmit}>
      <label htmlFor="searchInput">MOVIE NAME</label>
      <input
        id="searchInput"
        type="text"
        className="search-input"
        placeholder="Enter movie name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" className="search-btn">Search!</button>
    </form>
  );
};

export default SearchBox;
