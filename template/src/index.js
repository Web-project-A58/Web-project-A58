import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderGifDetailed } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { search } from './requests/search_test.js';
import { makeUploadRequest } from './events/upload-events.js';
import { getDetails } from './requests/gif-detailed.js';
import { toSearchView } from './views/search-view.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // // show category events
    // if (event.target.classList.contains("view-category")) {
    //   renderCategory(+event.target.getAttribute("category-id"));
    // }

    // // show movie events
    // if (event.target.classList.contains("button")) {
    //   renderMovieDetails(+event.target.getAttribute("data-movie-id"));
    // }

    if (event.target.classList.contains("img")) {
      try {
        console.log(event.target.id);
        renderGifDetailed(event.target.id);
    } catch (error) {
        console.error('An error occurred while fetching GIF details:', error);
    }
    }

    // toggle favorite event
    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
    }

       // upload events
    if (event.target.classList.contains("upload-button")) {
    
    event.preventDefault()
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; 
    const tagsInput = document.getElementById('tagsInput').value; 
    makeUploadRequest(file, tagsInput);
    }

  });

 
  q('#searchButton').addEventListener('click', async () => {
    const query = q('#search').value;
    const results = await search(query);
    renderSearchItems(results);

});

  loadPage(HOME);

});