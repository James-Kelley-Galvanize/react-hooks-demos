import "./App.css";
import { useState } from "react";

function App() {
	const [count, setCount] = useState(0);
	return (
		<div className="App">
			<h1>useState Hook Demo</h1>
			<h1>THE COUNT IS: {count}</h1>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setCount(count - 1);
				}}
			>
				-
			</button>
		</div>
	);
}

export default App;
