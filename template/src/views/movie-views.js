import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toMoviesFromCategoryView = (category, movies) => `
<div id="movies">
  <h1>${category.name} movies:</h1>
  <div class="content">
    ${movies.map(toMovieSimple).join('\n')}
  </div>
</div>
`;

export const toSingleMovieView = (movie) => `
${toMovieDetailed(movie)}
`;

export const toMovieSimple = (movie) =>`
<div class="movie">

  <h2>
    ${movie.title}
  </h2>
  <p>
    Year:${movie.year}
  </p>
  <img src="${movie.poster}" alt="${movie.title}" width="20%">
  <div class="movie-details">
  <button class="button" data-movie-id="${movie.id}">View details</button>
  ${renderFavoriteStatus(movie.id)}
</div>
</div>
`;

const toMovieDetailed = (movie) => `
<div id="${movie.id}">
  <h2>
    ${movie.title} (${movie.year})
  </h2>
  <div>
    <img src="${movie.poster}" width="20%" alt="${movie.title}"/>
    <div>
    Genre: ${movie.genre}
    Director: ${movie.director}
    Staring: ${[...movie.stars]}
    Plot: ${movie.description}</br></br>
    </div>
  </div>
</div>
`;
