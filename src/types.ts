export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
}

export interface ApiResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export type SortOption = 'release_date.desc' | 'release_date.asc' | 'vote_average.desc' | 'vote_average.asc' | 'none';
