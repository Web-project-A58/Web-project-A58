import { CONTAINER_SELECTOR, FAVORITES, HOME, UPLOAD, UPLOADED } from '../common/constants.js';
import { getFavorites } from '../data/favorite-gifs.js';
import { fetchGifsById, fetchGifsByIds } from '../requests/request-service.js';
import { toUploadedView } from '../views/uploaded-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toUploadView } from '../views/upload-view.js';
import { q, setActiveNav } from './helpers.js';
import { fetchTrendingGifs } from '../requests/request-service.js';
import { LIMIT_GIFS } from '../common/constants.js';
import { gifDetailedView } from '../views/gif-details-view.js';
import { getDetails } from '../requests/gif-detailed.js';
import { getUploaded } from '../data/uploaded-gifs.js';
import { toggleFavoriteStatus } from './favorites-events.js';
import { renderFavoriteStatus } from './favorites-events.js';

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



const renderHome = () => {
  fetchTrendingGifs(LIMIT_GIFS).then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toHomeView(data);
  });
};



const renderUploaded = async () => {
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

const renderFavorites = async () => {
  const favoriteIds = getFavorites();
  fetchGifsByIds(favoriteIds).then((data) => {
    q(CONTAINER_SELECTOR).innerHTML = toFavoritesView(data);
  });
};

const renderUpload = () => {
    q(CONTAINER_SELECTOR).innerHTML = toUploadView();
};


export const renderGifDetailed = async (id = null) => {
    const gif = await getDetails(id);
  q(CONTAINER_SELECTOR).innerHTML = gifDetailedView(gif);
};
