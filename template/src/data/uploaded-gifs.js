/**
 * Array containing the IDs of uploaded GIFs retrieved from localStorage.
 * @type {string[]}
 */
let uploadedGifs = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF to the list of uploaded GIFs in localStorage.
 * 
 * @param {string} gifId - The ID of the GIF to add to uploaded GIFs.
 */
export const addUploaded = (gifId) => {
  if (uploadedGifs.find(id => id === gifId)) {
        return;
  }

  uploadedGifs.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

/**
 * Retrieves the list of uploaded GIFs from localStorage.
 * 
 * @returns {string[]} - An array containing the IDs of uploaded GIFs.
 */
export const getUploaded = () => [...uploadedGifs];
