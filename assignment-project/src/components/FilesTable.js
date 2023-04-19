const FilesTable = ({ currentFiles }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Size</th>
          <th style={{ width: "30%" }}>Play</th>
        </tr>
      </thead>
      <tbody>
        {currentFiles.length &&
          currentFiles.map((file, index) => (
            <tr key={index}>
              <td>{file.id}</td>
              <td>{file.name}</td>
              <td>{file.size}</td>
              <td>
                <audio controls>
                  <source src={file.dataURL} type="audio/mp3" />
                </audio>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default FilesTable;
