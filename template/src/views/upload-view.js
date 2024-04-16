/**
 * Generates HTML markup for the upload form view.
 *
 * @returns {string} - The HTML markup for the upload form view.
 */
export const toUploadView = () => `
  <div id="uploadFormContainer">
    <form id="uploadForm" enctype="multipart/form-data">
      <div>
        <label for="fileInput">Choose a file:</label>
        <input type="file" id="fileInput" name="fileInput">
      </div>
      <div>
        <label for="tagsInput">Tags (comma-separated):</label>
        <input type="text" id="tagsInput" name="tagsInput">
      </div>
      <button type="button" class="upload-button">Upload</button>
      <div class="ocean">
  <div class="wave"></div>
  <div class="wave wave2"></div>
</div>
    </form>
  </div>
`;
