let favoriteGifs = JSON.parse(localStorage.getItem('favorites')) || [];

/**
 * Adds a GIF to favorites.
 * 
 * @param {string} gifId - The ID of the GIF to add to favorites.
 */
export const addFavorite = (gifId) => {
  if (favoriteGifs.find(id => id === gifId)) {
        return;
  }

  favoriteGifs.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
};

/**
 * Removes a GIF from favorites.
 * 
 * @param {string} gifId - The ID of the GIF to remove from favorites.
 */
export const removeFavorite = (gifId) => {
  favoriteGifs = favoriteGifs.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
};

/**
 * Retrieves the list of favorite GIFs.
 * 
 * @returns {string[]} - An array containing the IDs of favorite GIFs.
 */
export const getFavorites = () => [...favoriteGifs];
