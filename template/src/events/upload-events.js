/* eslint-disable no-undef */
export const displaySuccessMessage = (message, duration) => {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');

  document.body.appendChild(successMessage);

  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, duration);
};

export const displayErrorMessage = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message');

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    document.body.removeChild(errorMessage);
  }, 1000);
};

export const validateTags = (tags) => {
  if (!tags.trim()) {
    return true;
  }
  const tagArray = tags.split(',').map((tag) => tag.trim());
  if (tagArray.some((tag) => !tag)) {
    return false;
  }
  if (tagArray.every((tag) => typeof tag === 'string')) {
    return true;
  }
  return false;
};
