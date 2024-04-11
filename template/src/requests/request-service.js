import { getCategories, getMoviesGeneralInfo, getMovieById, getCategory, searchMovies } from '../data/movies.js';
import { API_KEY,API_URL } from '../common/constants.js';

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


export const fetchTrendingGifs = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching trending gifs:", error);
  }
};