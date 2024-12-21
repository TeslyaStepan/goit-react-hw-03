const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <label htmlFor="">Find contacts by name</label>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
};

export default SearchBox;
