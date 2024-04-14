import { API_KEY,API_URL } from '../common/constants.js';

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

export const fetchGifsById = async (gifId) => {
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

