let favoriteGifs = JSON.parse(localStorage.getItem('favorites')) || [];

export const addFavorite = (gifId) => {
  if (favoriteGifs.find(id => id === gifId)) {
        return;
  }

  favoriteGifs.push(gifId);
  localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
};

export const removeFavorite = (gifId) => {
  favoriteGifs = favoriteGifs.filter(id => id !== gifId);
  localStorage.setItem('favorites', JSON.stringify(favoriteGifs));
};

export const getFavorites = () => [...favoriteGifs];
