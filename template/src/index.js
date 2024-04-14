import { HOME } from './common/constants.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { q } from './events/helpers.js';
import { loadPage, renderGifDetailed, renderUploadEvent } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
import { search } from './requests/search_test.js';
import { makeUploadRequest } from './events/upload-events.js';
import { fetchUploadRequest } from './requests/request-service.js';
import { addUploaded } from './data/uploaded-gifs.js';

document.addEventListener('DOMContentLoaded', () => {


  document.addEventListener('click', event => {


    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    if (event.target.classList.contains("img")) {
      try {
        console.log(event.target.id);
        renderGifDetailed(event.target.id);
    } catch (error) {
        console.error('An error occurred while fetching GIF details:', error);
    }
    }


    if (event.target.classList.contains("favorite")) {
      toggleFavoriteStatus(event.target.getAttribute("data-gif-id"));
    }


    if (event.target.classList.contains("upload-button")) {
    
    event.preventDefault()
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0]; 
    const tags = document.getElementById('tagsInput').value; 
    renderUploadEvent(file, tags);
    
    }

  });

 
  q('#searchButton').addEventListener('click', async () => {
    const query = q('#search').value;
    const results = await search(query);
    renderSearchItems(results);

});

  loadPage(HOME);

});