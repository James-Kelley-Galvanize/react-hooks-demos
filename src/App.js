import "./App.css";
import { useReducer } from "react";

const initialState = { count: 0 };

function countReducer(state, action) {
	const { count } = state;
	switch (action.type) {
		case `increment`:
			return { count: count + 1 };
		case `decrement`:
			return { count: count - 1 };
		case `times2`:
			return { count: count * 2 };
		case `times3`:
			return { count: count * 3 };
		case `divide2`:
			return { count: count / 2 };
		case `zero`:
			return { count: 0 };
		default:
			throw new Error();
	}
}

function App() {
	const [state, dispatch] = useReducer(countReducer, initialState);
	const { count } = state;
	const prettyCount = count.toFixed(2); // Make number always have 2 digits after it when displayed on page
	return (
		<div className="App">
			<h1>useReducer Hook Demo</h1>
			<h1>THE COUNT IS: {prettyCount}</h1>
			<button onClick={() => dispatch({ type: `increment` })}>➕1️⃣</button>
			<button onClick={() => dispatch({ type: `decrement` })}>➖1️⃣</button>
			<button onClick={() => dispatch({ type: `times2` })}>✖️2️⃣</button>
			<button onClick={() => dispatch({ type: `times3` })}>✖️3️⃣</button>
			<button onClick={() => dispatch({ type: `divide2` })}>➗2️⃣</button>
			<button onClick={() => dispatch({ type: `zero` })}> 🔄 </button>
		</div>
	);
}

export default App;
