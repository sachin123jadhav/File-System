import React, { useState } from 'react';

function FileBrowser() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <div>
          <p>Selected File: {selectedFile.name}</p>
          {/* You can't access the full local file path */}
        </div>
      )}
    </div>
  );
}

export default FileBrowser;
