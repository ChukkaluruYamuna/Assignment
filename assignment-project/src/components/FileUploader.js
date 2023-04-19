import React from "react";
import { useDispatch } from "react-redux";
import { uploadFiles } from "../redux/uploaderActions";

const FileUploader = () => {
  const dispatch = useDispatch();

  const handleFileChange = (event) => {
    const filesObj = event.target.files;
    /* Handing multiple file uploads */
    Object.keys(filesObj).forEach((key) => {
      const file = filesObj[key];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        dispatch(
          uploadFiles({
            name: file.name,
            size: file.size,
            id: file.name.split(".")[0],
            dataURL: reader.result,
          })
        );
      };
    });
  };

  return (
    <div className="file-uploader-container">
      <label className="file-uploader">
        Upload audio files
        <input
          type="file"
          accept=".wav,.mp3"
          multiple
          onChange={handleFileChange}
        />
      </label>
    </div>
  );
};

export default FileUploader;
