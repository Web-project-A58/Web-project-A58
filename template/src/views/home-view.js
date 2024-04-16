import { renderFavoriteStatus } from '../events/favorites-events.js';

/**
 * Generates HTML markup for displaying trending GIFs on the home page.
 *
 * @param {Object[]} gifs - An array of GIF objects representing trending GIFs.
 * @returns {string} - The HTML markup for displaying the trending GIFs.
 */
export const toHomeView = (gifs) => `
<div id="trending-gifs">
<h1>TRENDING  </h1>
      ${gifs.map((gif) => {
    return `<img id=${gif.id} class="img" src=${gif.images.original.url}>
      ${renderFavoriteStatus(gif.id)}`;
  }).join('')} 
</div>
`;
