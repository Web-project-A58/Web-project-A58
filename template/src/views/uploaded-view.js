import { renderFavoriteStatus } from "../events/favorites-events.js";
/**
 * Generates HTML markup for displaying uploaded GIFs.
 * 
 * @param {Object[]} gifs - An array of GIF objects representing uploaded GIFs.
 * @returns {string} - The HTML markup for displaying the uploaded GIFs.
 */
export const toUploadedView = (gifs) => `
<div id="trending-gifs">
    <h3>Uploaded</h3>
    ${gifs.map((gif) => {
      return `<img id=${gif.id} class="img" src=
      ${gif.images.original.url}>
      ${renderFavoriteStatus(gif.id)}`;
    }).join('')} 
</div>
`;

