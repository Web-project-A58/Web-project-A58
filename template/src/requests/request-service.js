/* eslint-disable max-len */
import { API_KEY, API_URL, API_URL_POST, API_URL_RANDOM, LIMIT_GIFS } from '../common/constants.js';

/**
 * Fetches trending GIFs from the API.
 *
 * @param {number} limit - The maximum number of GIFs to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of trending GIFs data.
 * @throws {Error} - If there is an error during the upload process.
 */
export const fetchTrendingGifs = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error('Error fetching trending gifs:', error);
  }
};

/**
 * Fetches GIFs by their IDs from the API.
 *
 * @param {string[]} ids - An array of GIF IDs to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of GIFs data.
 * @throws {Error} - If there is an error fetching GIFs by ID.
 */
export const fetchGifsByIds = async (ids) => {
  try {
    const response = await fetch(`${API_URL}?api_key=${API_KEY}&ids=${ids}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching GIFs by ID:', error);
    throw error;
  }
};


/**
 * Sends an upload request to the API.
 *
 * @param {File} fileInput - The file input to upload.
 * @param {string} tags - The tags associated with the upload.
 * @returns {Promise<Object>} - A promise that resolves to the uploaded GIF data.
 * @throws {Error} - If there is an error during the upload process.
 */
export const fetchUploadRequest = async (fileInput, tags) => {
  const formData = new FormData();
  formData.append('file', fileInput);
  formData.append('tags', tags);

  try {
    const response = await fetch(`${API_URL_POST}?api_key=${API_KEY}`, {
      method: 'POST',
      body: formData,
      headers: {
        'api_key': API_KEY,
      },
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error uploading GIF', error);
    throw error;
  }
};


/**
 * Searches for GIFs based on a query string.
 *
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of search result GIFs data.
 * @throws {Error} - If there is an error during the upload process.
 */
export const search = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${LIMIT_GIFS}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('An error occurred during the search:', error);
    return [];
  }
};


/**
 * Fetches details of a GIF by its ID from the API.
 *
 * @param {string} gidId - The ID of the GIF to fetch details for.
 * @returns {Promise<Object>} - A promise that resolves to the GIF details.
 * @throws {Error} - If there is an error during the upload process.
 */
export const getDetails = async (gidId) => {
  try {
    const response = await fetch(`${API_URL}/${gidId}?api_key=${API_KEY}&gif_id=${gidId}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('An error occurred during the search:', error);
    return [];
  }
};

/**
 * Fetches trending GIFs from the API.
 *
 * @param {number} limit - The maximum number of GIFs to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of trending GIFs data.
 * @throws {Error} - If there is an error during the upload process.
 */
export const fetchRandomGif = async () => {
  try {
    const response = await fetch(`${API_URL_RANDOM}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error('Error fetching random gif:', error);
  }
};
