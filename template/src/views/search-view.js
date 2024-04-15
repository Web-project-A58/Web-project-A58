import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * Generates HTML markup for displaying search results.
 * 
 * @param {Object[]} gifs - An array of GIF objects representing search results.
 * @returns {string} - The HTML markup for displaying the search results.
 */
export const toSearchView = (gifs) =>  {
  if (gifs.length === 0) {
    return "No results found.";
  }

   return `<div>
            ${gifs.map((gif) => {
               return `<img id=${gif.id} class="img" src=
                 ${gif.images.original.url}>
                 ${renderFavoriteStatus(gif.id)}`;
            }).join('')}
    </div>
  `;
};
