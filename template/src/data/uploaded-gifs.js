let uploadedGifs = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploaded = (gifId) => {
  if (uploadedGifs.find(id => id === gifId)) {
        return;
  }

  uploadedGifs.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploadedGifs));
};

export const getUploaded = () => [...uploadedGifs];
