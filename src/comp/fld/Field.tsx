import "./Field.css";

function Field() {
  return (
    <input
      id="search-input"
      className="field-input"
      type="text"
      placeholder="Search..."
      autoComplete="off"
    />
  )
}

export default Field;