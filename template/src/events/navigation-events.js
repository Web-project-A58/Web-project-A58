import { ABOUT, CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME, UPLOAD } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
import { getCategory, getMovieById, getMoviesGeneralInfo } from '../data/movies.js';
import { loadCategories } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toCategoriesView } from '../views/category-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchTrendingGifs } from '../requests/request-service.js';
import { LIMIT_GIFS } from '../common/constants.js';
// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case CATEGORIES:
      setActiveNav(CATEGORIES);
      return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();


    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

export const renderMovieDetails = (id = null) => {

  const _movie = getMovieById(id);   
  q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(_movie);

};

export const renderCategory = (categoryId = null) => {
 
  const _movie = getMoviesGeneralInfo(categoryId)
  const _category = getCategory(categoryId)
  q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(_category,_movie);
};



const renderHome = () => {
  fetchTrendingGifs(LIMIT_GIFS).then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  });
};

const renderCategories = () => {

  const categories = loadCategories()
  q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
};

const renderFavorites = () => {
  const _movies = getFavorites().map(getMovieById);

  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(_movies);
};

const renderAbout = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

const renderUpload = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};
