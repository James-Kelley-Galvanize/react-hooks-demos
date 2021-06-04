import { useRef, useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
	const [tasks, setTasks] = useState([]);
	const inputElement = useRef(null); // create a ref
	function addTask() {
		const userInput = inputElement.current;
		const task = userInput.value;
		setTasks([...tasks, task]);
		userInput.value = "";
	}
	return (
		<div className="App">
			<input
				ref={inputElement} // assign the ref to this.  React will assign this node to the ref's 'current' property
				type="text"
			/>
			<button onClick={addTask}>ADD TASK</button>
			<h2>TASKS:</h2>
			{tasks.map((task, index) => (
				<Task task={task} key={task + index} />
			))}
		</div>
	);
}

export default App;
