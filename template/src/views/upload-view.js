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
    </form>
  </div>
`;
