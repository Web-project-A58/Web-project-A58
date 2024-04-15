import { API_KEY, API_URL, API_URL_POST, LIMIT_GIFS } from '../common/constants.js';

// Display trending gifs -trending endpoint

// Search gifs - search endpoint 

// Display gif details - fetch by id

// Upload gif - post request

// Upload view - fetch by id

// Favorites view - fetch by id


/**
 * Fetches trending GIFs from the API.
 * 
 * @param {number} limit - The maximum number of GIFs to fetch.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of trending GIFs data.
 */
export const fetchTrendingGifs = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching trending gifs:", error);
  }
};

/**
 * Fetches a GIF by its ID from the API.
 * 
 * @param {string} gifId - The ID of the GIF to fetch.
 * @returns {Promise<Object>} - A promise that resolves to the GIF data.
 */
export const fetchGifById = async (gifId) => {
  try {
    const response = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching gif by id:", error);
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
    console.error("Error fetching GIFs by ID:", error);
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
  console.error("Error uploading GIF", error);
  throw error;
}
}


/**
 * Searches for GIFs based on a query string.
 * 
 * @param {string} query - The search query.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of search result GIFs data.
 */
export const search = async (query) => {
  try {
    const response = await fetch(`${API_URL}/search?api_key=${API_KEY}&q=${encodeURIComponent(query)}&limit=${LIMIT_GIFS}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
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
 * @param {string} gif_id - The ID of the GIF to fetch details for.
 * @returns {Promise<Object>} - A promise that resolves to the GIF details.
 */
export const getDetails = async (gif_id) => {
  try {
    const response = await fetch(`${API_URL}/${gif_id}?api_key=${API_KEY}&gif_id=${gif_id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('An error occurred during the search:', error);
    return [];
  }
};