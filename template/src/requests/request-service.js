import { API_KEY, API_URL, API_URL_POST, LIMIT_GIFS } from '../common/constants.js';

// Display trending gifs -trending endpoint

// Search gifs - search endpoint 

// Display gif details - fetch by id

// Upload gif - post request

// Upload view - fetch by id

// Favorites view - fetch by id


export const fetchTrendingGifs = async (limit) => {
  try {
    const response = await fetch(`${API_URL}/trending?api_key=${API_KEY}&limit=${limit}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching trending gifs:", error);
  }
};

export const fetchGifById = async (gifId) => {
  try {
    const response = await fetch(`${API_URL}/${gifId}?api_key=${API_KEY}`);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return console.error("Error fetching gif by id:", error);
  }
};

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