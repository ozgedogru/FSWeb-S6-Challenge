function Search(search, handleChange) {
  return (
    <div>
      <input type="text" name="search" value={search} onChange={handleChange} />
    </div>
  );
}

export default Search;
