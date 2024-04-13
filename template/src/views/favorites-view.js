import { gifDetailedView } from "./gif-details-view.js";

export const toFavoritesView = (gifs) => `
<div id="movies">
  <h1>Favorite giphy:</h1>
  <div class="content">
    ${gifs.map(gif => (gifDetailedView(gif))) || '<p>Add some Giphy to favorites to see them here.</p>'}
  </div>
</div>
`;
