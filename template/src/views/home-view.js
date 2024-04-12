export const toHomeView = (gifs) => `
<div id="trending-gifs">
    <h3>Trending</h3>
    ${gifs.map((gif) => {
      return `<img src=
      ${gif.images.original.url}>`;
    })} 
</div>
`;

