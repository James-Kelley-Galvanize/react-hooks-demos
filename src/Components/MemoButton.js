const React = require("react");

function MemoButton({ clickHandler }) {
	console.log(`✔️: MemoButton component being rendered!`);
	return (
		<button style={{ margin: `2%` }} onClick={clickHandler}>
			Add Task
			<br />
			(MEMOIZED BUTTON)
		</button>
	);
}
export default React.memo(MemoButton);
