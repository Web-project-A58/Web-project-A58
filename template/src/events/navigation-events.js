import { CONTAINER_SELECTOR, FAVORITES, HOME, UPLOAD, UPLOADED } from '../common/constants.js';
import { getFavorites } from '../data/favorite-gifs.js';
import { fetchGifsByIds, fetchUploadRequest } from '../requests/request-service.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchTrendingGifs } from '../requests/request-service.js';
import { LIMIT_GIFS } from '../common/constants.js';
import { gifDetailedView } from '../views/gif-details-view.js';
import { getDetails } from '../requests/request-service.js';
import { getUploaded } from '../data/uploaded-gifs.js';
import { addUploaded } from '../data/uploaded-gifs.js';
import { toSearchView } from '../views/search-view.js';

/**
 * Loads a specific page based on the provided page parameter.
 * 
 * @param {string} [page=''] - The page identifier ('HOME', 'FAVORITES', 'UPLOADED', 'UPLOAD').
 * @returns {HTMLElement|null} - The rendered content for the specified page, or null if the page identifier is invalid.
 */
export const loadPage = (page = '') => {

  switch (page) {

    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOADED:
      setActiveNav(UPLOADED);
      return renderUploaded();

    case UPLOAD:
      setActiveNav(UPLOAD);
      return renderUpload();
    
      default: return null;
      
  }

};

/**
 * Renders the upload event based on the provided file input and tags input.
 * 
 * @param {HTMLInputElement} fileInput - The file input element.
 * @param {HTMLInputElement} tagsInput - The tags input element.
 */
export const renderUploadEvent = (fileInput, tagsInput) => {
  fetchUploadRequest(fileInput, tagsInput)
  .then(data => addUploaded(data.id));
    }

/**
 * Renders the home page.
 */
const renderHome = () => {
  fetchTrendingGifs(LIMIT_GIFS).then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  });
};

/**
 * Renders the uploaded page.
 */
const renderUploaded = () => {
  const uploadedIds = getUploaded();
  fetchGifsByIds(uploadedIds).then((data) => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadedView(data);
  });
};
  // console.log(uploadedIds);
  // try {
  //   //const uploaded = await fetchGifsById(uploadedIds.join(','));
  //   //console.log(uploaded);
  //   const uploadedGifs = await Promise.all(uploadedIds.map(id => fetchGifsById(id)));
  //   q(CONTAINER_SELECTOR).innerHTML = toUploadedView(uploadedGifs);
  // } catch (error) {
  //   console.error('Error fetching uploaded GIFs:', error);
  // }
//};

/**
 * Renders the favorites page.
 */
const renderFavorites = () => {
  const favoriteIds = getFavorites();
  fetchGifsByIds(favoriteIds).then((data) => {
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(data);
  });
};

/**
 * Renders the upload page.
 */
const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};

/**
 * Renders the detailed view of a GIF.
 * 
 * @param {string|null} id - The ID of the GIF to render details for.
 */
export const renderGifDetailed = async (id = null) => {
    const gif = await getDetails(id);
  q(CONTAINER_SELECTOR).innerHTML = gifDetailedView(gif);
};

/**
 * Renders the search results.
 * 
 * @param {Object[]} gifs - An array of GIF objects representing the search results.
 */
export const renderSearchItems = (gifs) => {
  q(CONTAINER_SELECTOR).innerHTML=toSearchView(gifs);
 };
 