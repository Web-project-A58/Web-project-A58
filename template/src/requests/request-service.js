import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';

export const loadCategories = () => {
  const categories = getCategories();
  return categories;
};

export const loadCategory = (id = null) => {
  const category = getCategory(id);
  return category;
}

export const loadMovies = (categoryId = null) => {
  const movies = getMoviesGeneralInfo(categoryId)
  return movies;
};

export const loadSingleMovie = (id) => {
  const movies = getMovieById(id);
  return movies;
};

export const loadSearchMovies = (searchTerm = '') => {
  const movies = searchMovies(searchTerm)
  return movies;
};


// Display trending gifs 

// Search gifs

// Display gif details 

// Upload gif