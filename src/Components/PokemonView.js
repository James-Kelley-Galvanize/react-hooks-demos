import { useContext } from "react";
import AppContext from "../Contexts/AppContext";
import Controllers from "./Controllers";
import FlavorText from "./FlavorText";

function PokemonView() {
	const { pokeData, version } = useContext(AppContext);
	return (
		<div>
			{version ? ( // Conditional render w/ ternary
				<>
					<h1>{pokeData.name.toUpperCase()}</h1>
					<img
						src={pokeData.sprites.front_default}
						style={{
							height: "30vh",
						}}
						alt={`pokeData.name`}
					/>
					<FlavorText />
					<Controllers />
				</>
			) : (
				<></>
			)}
		</div>
	);
}
export default PokemonView;
