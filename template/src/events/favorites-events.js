import { EMPTY_HEART, FULL_HEART } from '../common/constants.js';
import { addFavorite, getFavorites, removeFavorite } from '../data/favorite-gifs.js';
import { q } from './helpers.js';

// export const toggleFavoriteStatus = (movieId) => {
//   const favorites = getFavorites();
//   const heartSpan = q(`span[data-movie-id="${movieId}"]`);
  
//   if (favorites.includes(movieId)) {
//     removeFavorite(movieId);
//     heartSpan.classList.remove('active')
//     heartSpan.innerHTML = EMPTY_HEART;
//   } else {
//     addFavorite(movieId);
//     heartSpan.classList.add('active');
//     heartSpan.innerHTML = FULL_HEART;
//   }
// };

// export const renderFavoriteStatus = (movieId) => {


//   const favorites = getFavorites();

//   return favorites.includes(movieId)
//     ? `<span class="favorite active" data-movie-id="${movieId}">${FULL_HEART}</span>`
//     : `<span class="favorite" data-movie-id="${movieId}">${EMPTY_HEART}</span>`;
// };

export const toggleFavoriteStatus = (gifId) => {
    const favorites = getFavorites();
  
  const heartSpan = q(`span[data-gif-id="${gifId}"]`);
  
  if (favorites.includes(gifId)) {
    removeFavorite(gifId);
    heartSpan.classList.remove('active')
    heartSpan.innerHTML = EMPTY_HEART;
  } else {
    addFavorite(gifId);
    heartSpan.classList.add('active');
    heartSpan.innerHTML = FULL_HEART;
  }
  
};

export const renderFavoriteStatus = (gifId) => {


  const favorites = getFavorites();

  return favorites.includes(gifId)
    ? `<span class="favorite active" data-gif-id="${gifId}">${FULL_HEART}</span>`
    : `<span class="favorite" data-gif-id="${gifId}">${EMPTY_HEART}</span>`;
};

