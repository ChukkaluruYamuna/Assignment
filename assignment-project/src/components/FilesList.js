import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";
import FilesTable from "./FilesTable";
import SearchBar from "./SearchBar";

const FilesList = () => {
  const audioFiles = useSelector((state) => state.files);

  /* Filtering 10 files per page */
  const [currentPage, setCurrentPage] = useState(1);
  const filesPerPage = 10;
  const indexOfLastFile = currentPage * filesPerPage;
  const indexOfFirstFile = indexOfLastFile - filesPerPage;
  const currentFiles = audioFiles.slice(indexOfFirstFile, indexOfLastFile);
  const paginate = (pageNum) => setCurrentPage(pageNum);

  /*Search logic */
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };
  const filteredData = audioFiles.filter((file) => {
    return file.id.includes(searchTerm);
  });

  return (
    <div className="files-container">
      {audioFiles.length ? (
        <div>
          <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
          <FilesTable currentFiles={searchTerm ? filteredData : currentFiles} />
        </div>
      ) : (
        <div className="no-records"> No records found </div>
      )}

      <Pagination
        filesPerPage={filesPerPage}
        totalFiles={audioFiles.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default FilesList;
