export const SearhField = ({ filterBy }) => {
  return (
    <div className="field">
      <label htmlFor="search-query" className="label">
        Search movie
      </label>

      <div className="control">
        <input
          type="text"
          id="search-query"
          className="input"
          placeholder="Type search word"
          onChange={evt => {
            filterBy(evt.target.value);
          }}
        />
      </div>
    </div>
  );
};
