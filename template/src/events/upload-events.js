import { addUploaded } from "../data/uploaded-gifs.js";

/**
 * Makes an upload request to upload a GIF file to the Giphy API.
 * 
 * @param {File} fileInput - The File object representing the GIF file to upload.
 * @param {string} tags - The tags associated with the upload.
 * @returns {Promise<void>} - A promise that resolves once the upload request is completed successfully.
 * @throws {Error} - If the upload request fails.
 */
export const makeUploadRequest = async (fileInput, tags) => {
  const file = fileInput;
  const apiKey = 'AuFd7NG7BWm1LiIBrMoLT2Br9pIAT8Lr';
  
  const formData = new FormData();
  formData.append('file', file);
  formData.append('tags', tags);

  const url = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

  

  return await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
            'api_key': apiKey,
    },
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
    return response.json();
  })
  .then(data => {
    addUploaded(data.data.id);
    console.dir((localStorage.getItem('uploaded')));
    console.log('File uploaded successfully:', data);
    
  })
  .catch(error => {
    console.error('Error uploading file:', error);
    throw error;
  });
};
