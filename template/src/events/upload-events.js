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
  }, 1000); // Display error message for 3 seconds
};

export const validateTags = (tags) => {
  // If tags are empty, return true
  if (!tags.trim()) {
    return true;
  }

  // Split tags by comma and trim whitespace
  const tagArray = tags.split(',').map((tag) => tag.trim());

  // Check if any tag is empty after trimming
  if (tagArray.some((tag) => !tag)) {
    return false;
  }

  // Check if all tags are non-empty strings
  if (tagArray.every((tag) => typeof tag === 'string')) {
    return true;
  }

  return false;
};
