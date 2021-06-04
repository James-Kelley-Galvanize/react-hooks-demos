import React, { useCallback, useState } from "react";
import "./App.css";
import MemoButton from "./Components/MemoButton";
import NormalButton from "./Components/NormalButton";

import Task from "./Components/Task";

function App() {
	const [tasks, setTasks] = useState([]);

	const clickHandler = useCallback(
		(e) => {
			const input = document.querySelector(`#user-input`);
			const newTask = input.value;
			setTasks((tasks) => [...tasks, newTask]);
			input.value = "";
		},
		[setTasks]
	);
	return (
		<div className="App">
			<div>
				<input id="user-input" />
			</div>
			<NormalButton clickHandler={clickHandler} />
			<MemoButton clickHandler={clickHandler} />
			<br />
			{tasks.map((task, index) => (
				<Task task={task} key={task + index} />
			))}
		</div>
	);
}

export default App;
