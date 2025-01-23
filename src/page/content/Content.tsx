import {useState} from "react";

function Content() {
    const [count, setCount] = useState(0)
    return (
        <div className="card">
            <button onClick={() => {
                setCount((count) => count + 1)
            }}>
                count is {count}
            </button>
            <p>
                <code>Dolor is active</code>
            </p>
            <p className="read-the-docs">
                Welcome
            </p>
        </div>
    );
}

export default Content;