/* eslint-disable no-undef */
/**
 * Displays a success message on the screen for a specified duration.
 * @param {string} message - The message to display.
 * @param {number} duration - The duration in milliseconds for which the message should be displayed.
 */
export const displaySuccessMessage = (message, duration) => {
  const successMessage = document.createElement('div');
  successMessage.textContent = message;
  successMessage.classList.add('success-message');

  document.body.appendChild(successMessage);

  setTimeout(() => {
    document.body.removeChild(successMessage);
  }, duration);
};

/**
 * Displays an error message on the screen.
 * @param {string} message - The error message to display.
 */
export const displayErrorMessage = (message) => {
  const errorMessage = document.createElement('div');
  errorMessage.textContent = message;
  errorMessage.classList.add('error-message');

  document.body.appendChild(errorMessage);

  setTimeout(() => {
    document.body.removeChild(errorMessage);
  }, 1000);
};

/**
 * Validates tags to ensure they are non-empty strings.
 * @param {string} tags - The tags to validate, separated by commas.
 * @returns {boolean} - True if the tags are valid, false otherwise.
 */
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
