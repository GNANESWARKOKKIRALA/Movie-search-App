# Movie Search App

A simple single-page movie search application built with React, TypeScript, and Vite, utilizing The Movie Database (TMDb) API.

## Features

- **Search:** Find movies by their title.
- **Sorting:** Order results by release date (newest/oldest) or rating (highest/lowest).
- **Filtering:** Filter movies by a minimum rating score (0 to 10).
- **Pagination:** Navigate through pages of search results.
- **Responsive Design:** Clean and simple UI based on the provided requirements.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- A TMDb API key (Get it from [https://developers.themoviedb.org/](https://developers.themoviedb.org/))

### Installation

1. Clone or download this project.
2. Navigate to the project directory:
   ```bash
   cd "movie search app"
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root of the project and add your TMDb API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

### Running Tests
The project uses Vitest and React Testing Library for unit tests.
```bash
npm run test
```

## Deployment to Netlify

1. Push your code to a GitHub repository.
2. Sign up or log in to [Netlify](https://www.netlify.com/).
3. Click on **Add new site** > **Import an existing project**.
4. Choose **GitHub** and authorize Netlify.
5. Select your repository.
6. Configure the build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
7. Click **Show advanced** and add a new environment variable:
   - **Key:** `VITE_TMDB_API_KEY`
   - **Value:** (Your actual TMDB API Key)
8. Click **Deploy site**.

## Tech Stack
- React 19
- TypeScript
- Vite
- Vitest & React Testing Library
