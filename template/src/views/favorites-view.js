import { gifDetailedView } from "./gif-details-view.js";

export const toFavoritesView = (gif) => `
<div id="movies">
  <h1>Favorite giphy:</h1>
  <div class="content"> 
    ${gif.map(gifDetailedView).join('\n') || '<p>Add some Giphy to favorites to see them here.</p>'}
  </div>
</div>
`;
