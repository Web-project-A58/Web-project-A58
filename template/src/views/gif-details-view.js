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
