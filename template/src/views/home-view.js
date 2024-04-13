import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toHomeView = (gifs) => `
<div id="trending-gifs">
    <h3>Trending</h3>
    ${gifs.map((gif) => {
      return `
        <div class="gif-container" data-movie-id="${gif.id}">
          <img class="img" src="${gif.images.original.url}" alt="${gif.title}">
          ${renderFavoriteStatus(gif.id)}
        </div>
      `;
    }).join('')} 
</div>
`;

