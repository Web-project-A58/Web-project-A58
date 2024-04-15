/**
 * Generates HTML markup for displaying detailed information about a GIF.
 * 
 * @param {Object} gif - An object representing a GIF, containing properties like title, username, rating, and source_post_url.
 * @returns {string} - The HTML markup for displaying the detailed information about the GIF.
 */
export const gifDetailedView = (gif) =>
  `<div>
      <h2>
       Gif Title: ${gif.title}
      </h2>
      <div>
    <img src=
      ${gif.images.original.url}> <br>
        Username: ${gif.username} <br>
        Rating: ${gif.rating} <br>
        Source post url: ${gif.source_post_url}
      </div>
  </div>`;
