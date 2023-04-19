import FileUploader from "./FileUploader";
import FilesList from "./FilesList";

const FileUploaderDashboard = () => {
  return (
    <>
      <div className="dashboard_header">Welcome to Audio Files Uploader</div>
      <FileUploader />
      <FilesList />
    </>
  );
};

export default FileUploaderDashboard;
