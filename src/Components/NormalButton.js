let count = 0;
function NormalButton({ clickHandler }) {
	count += 1;
	console.log(
		`❌: NormalButton component being rendered${count > 1 ? ` again` : ``}!`
	);
	return (
		<button onClick={clickHandler}>
			Add Task
			<br /> (NORMAL BUTTON)
		</button>
	);
}
export default NormalButton;
