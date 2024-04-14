import { renderFavoriteStatus } from "../events/favorites-events.js";
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
