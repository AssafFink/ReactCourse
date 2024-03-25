import { SyntheticEvent, useState } from "react";
import "./Search.css";

export function Search(): JSX.Element {

    // 1. State for the text value: 
    const [text, setText] = useState<string>("");

    // 2. Function for the onChange event:
    function handleChange(args: SyntheticEvent) {
        const text = (args.target as HTMLInputElement).value;
        setText(text);
    }

    function searchInWebsite() {
        alert("Searching for " + text);
        setText("");
    }

    return (
        <div className="Search">
            <span>Search: </span>
            {/* Two-Way Binding: */}
			<input type="search" onChange={handleChange} value={text} style={{color: text}} />
            <button onClick={searchInWebsite}>🔍</button>
        </div>
    );
}
