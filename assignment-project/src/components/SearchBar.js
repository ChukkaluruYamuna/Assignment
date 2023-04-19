const SearchBar = ({ searchTerm, handleChange }) => {
  return (
    <div className="search-bar">
      <label>List of uploaded files</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by ID"
      />
    </div>
  );
};

export default SearchBar;
