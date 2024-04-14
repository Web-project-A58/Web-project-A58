import { renderFavoriteStatus } from "../events/favorites-events.js";

export const toHomeView = (gifs) => `
<div id="trending-gifs">
      ${gifs.map((gif) => {
      return `<img id=${gif.id} class="img" src=${gif.images.original.url}>
      ${renderFavoriteStatus(gif.id)}`;
    }).join('')} 
</div>
`;
