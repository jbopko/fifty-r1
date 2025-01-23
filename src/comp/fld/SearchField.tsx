import {useState} from "react";
import Field from './Field';

const SearchField = () => {
  const [count, setCount] = useState(0);
  console.log(count)
  return (
    <div id="search">
      <a onClick={() => setCount(count + 1)}>
        <svg
          className="svg-search"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      </a>
      <Field/>
      <a onClick={() => setCount(count + 1)}>
        <svg
          className="svg-arrows-right"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m6 17 5-5-5-5"></path>
          <path d="m13 17 5-5-5-5"></path>
        </svg>
      </a>
    </div>
  )
}
export default SearchField;
