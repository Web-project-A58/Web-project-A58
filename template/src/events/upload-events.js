import { addUploaded, getUploaded } from "../data/uploaded-gifs.js";
import { fetchGifsById } from "../requests/request-service.js";

export const makeUploadRequest = async (fileInput, tags) => {
  const file = fileInput;
  const apiKey = 'AuFd7NG7BWm1LiIBrMoLT2Br9pIAT8Lr';
  console.dir(fileInput);
  const formData = new FormData();
  formData.append('file', file);
  formData.append('tags', tags);

  const url = `https://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

  console.dir(formData);

  return await fetch(url, {
    method: 'POST',
    body: formData,
    headers: {
      // 'Content-Type': 'application/json',
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
    console.log('File uploaded successfully:', data);
    
  })
  .catch(error => {
    console.error('Error uploading file:', error);
    throw error;
  });
};
