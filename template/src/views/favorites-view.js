import { gifDetailedView } from "./gif-details-view.js";

/**
 * Generates HTML markup for displaying favorite GIFs on the favorites page.
 * 
 * @param {Object[]} gifs - An array of GIF objects representing favorite GIFs.
 * @returns {string} - The HTML markup for displaying the favorite GIFs.
 */
export const toFavoritesView = (gifs) => `
<div id="favorites">
  <h1>FAVORITES GIPHY:</h1>
  <div class="content">
    ${gifs.map(gif => (gifDetailedView(gif))).join('') || '<p>Add some Giphy to favorites to see them here.</p>'}
  </div>
</div>
`;
