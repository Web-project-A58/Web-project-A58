import { CATEGORIES, CONTAINER_SELECTOR, FAVORITES, HOME, UPLOAD, UPLOADED } from '../common/constants.js';
import { getFavorites } from '../data/favorites.js';
//import { getCategory, getMovieById, getMoviesGeneralInfo } from '../data/movies.js';
import { fetchGifsById } from '../requests/request-service.js';
import { toUploadedView } from '../views/about-view.js';
//import { toCategoriesView } from '../views/category-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
//import { toMoviesFromCategoryView, toSingleMovieView } from '../views/movie-views.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchTrendingGifs } from '../requests/request-service.js';
import { LIMIT_GIFS } from '../common/constants.js';
import { gifDetailedView } from '../views/gif-details-view.js';
import { getDetails } from '../requests/gif-detailed.js';
import { getUploaded } from '../data/uploaded-gifs.js';
import { toggleFavoriteStatus } from './favorites-events.js';
import { renderFavoriteStatus } from './favorites-events.js';
// public API
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    // case CATEGORIES:
    //   setActiveNav(CATEGORIES);
    //   return renderCategories();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();


    /* if the app supports error logging, use default to log mapping errors */
    default: return null;
  }

};

// export const renderMovieDetails = (id = null) => {

//   const _movie = getMovieById(id);   
//   q(CONTAINER_SELECTOR).innerHTML = toSingleMovieView(_movie);

// };

// export const renderCategory = (categoryId = null) => {
 
//   const _movie = getMoviesGeneralInfo(categoryId)
//   const _category = getCategory(categoryId)
//   q(CONTAINER_SELECTOR).innerHTML = toMoviesFromCategoryView(_category,_movie);
// };

const renderHome = () => {
  fetchTrendingGifs(LIMIT_GIFS).then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  });
};
/* 
const renderHome = async () => {
  try {
    const data = await fetchTrendingGifs(LIMIT_GIFS);
    const container = q(CONTAINER_SELECTOR);
    container.innerHTML = toHomeView(data);

    container.querySelectorAll('.gif-container').forEach(gifContainer => {
      const gifId = gifContainer.getAttribute('data-movie-id');
      gifContainer.addEventListener('click', () => {
        toggleFavoriteStatus(gifId);
        renderFavoriteStatus(gifId); 
      });
    });
  } catch (error) {
    console.error("Error rendering home page:", error);
  }
}; */

// const renderCategories = () => {

//   const categories = loadCategories()
//   q(CONTAINER_SELECTOR).innerHTML = toCategoriesView(categories);
// };

// const renderFavorites = () => {
//   const _movies = getFavorites().map(getMovieById);

//   q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(_movies);
// };


const renderUploaded = async () => {
  const uploadedIds = getUploaded();
  console.log(uploadedIds);
  try {
    const uploadedGifs = await Promise.all(uploadedIds.map(id => fetchGifsById(id)));
    q(CONTAINER_SELECTOR).innerHTML = toUploadedView(uploadedGifs);
  } catch (error) {
    console.error('Error fetching uploaded GIFs:', error);
  }
};

const renderFavorites = async () => {
  const favoriteIds = getFavorites();
  console.log(favoriteIds);
  try {
    const favorireGifs = await Promise.all(favoriteIds.map(id => fetchGifsById(id)));
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(favorireGifs);
  } catch (error) {
    console.error('Error fetching favorite GIFs:', error);
  }
};

const renderUpload = () => {
  // missing implementation
  q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};


export const renderGifDetailed = async (id = null) => {
  // missing implementation
  const gif = await getDetails(id);
  q(CONTAINER_SELECTOR).innerHTML = gifDetailedView(gif);
};
