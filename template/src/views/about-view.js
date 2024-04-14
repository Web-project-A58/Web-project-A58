export const toUploadedView = (gifs) => `
<div id="trending-gifs">
    <h3>Trending</h3>
    ${gifs.map((gif) => {
      return `<img id=${gif.id} class="img" src=
      ${gif.images.original.url}>`;
    })} 
</div>
`;

