import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderCategory, renderGifDetailed, renderMovieDetails } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { search, displayResults } from './requests/search_test.js';
import { makeUploadRequest } from './events/upload-events.js';
import { getDetails } from './requests/gif-detailed.js';

document.addEventListener('DOMContentLoaded', () => {

  // add global listener
  document.addEventListener('click', event => {

    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // show category events
    if (event.target.classList.contains("view-category")) {
      renderCategory(+event.target.getAttribute("category-id"));
    }

    // show movie events
    if (event.target.classList.contains("button")) {
      renderMovieDetails(+event.target.getAttribute("data-movie-id"));
    }

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
      toggleFavoriteStatus(+event.target.getAttribute("data-movie-id"));
    }

       // upload events
    if (event.target.classList.contains("upload-button")) {
    
    event.preventDefault()
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; // Extract the file from the file input element
    const tagsInput = document.getElementById('tagsInput').value; // Get the tags input value
    console.dir(file)
    makeUploadRequest(file, tagsInput);

    //alert('Upload');
    }

  });

  // search events
  // q('input#search').addEventListener('input', event => {
  //   renderSearchItems(event.target.value);
  // });
  document.getElementById('searchButton').addEventListener('click', async () => {
    const query = document.getElementById('search').value;
    const results = await search(query);
    displayResults(results);
});

  loadPage(HOME);

});