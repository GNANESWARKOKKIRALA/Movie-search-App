import React from 'react';
import type { SortOption } from '../types';

interface ControlsProps {
  sortOption: SortOption;
  onSortChange: (option: SortOption) => void;
  minRating: number;
  onRatingChange: (rating: number) => void;
}

const Controls: React.FC<ControlsProps> = ({ 
  sortOption, 
  onSortChange, 
  minRating, 
  onRatingChange 
}) => {
  return (
    <div className="controls">
      <div>
        <label htmlFor="sortSelect" style={{marginRight: '0.5rem'}}>Sort By: </label>
        <select 
          id="sortSelect"
          value={sortOption} 
          onChange={(e) => onSortChange(e.target.value as SortOption)}
        >
          <option value="none">Default</option>
          <option value="release_date.desc">Release Date (Newest first)</option>
          <option value="release_date.asc">Release Date (Oldest first)</option>
          <option value="vote_average.desc">Rating (Highest first)</option>
          <option value="vote_average.asc">Rating (Lowest first)</option>
        </select>
      </div>

      <div>
        <label htmlFor="ratingFilter" style={{marginRight: '0.5rem'}}>Min Rating: {minRating}</label>
        <input 
          id="ratingFilter"
          type="range" 
          min="0" 
          max="10" 
          step="0.5" 
          value={minRating} 
          onChange={(e) => onRatingChange(parseFloat(e.target.value))} 
        />
      </div>
    </div>
  );
};

export default Controls;
