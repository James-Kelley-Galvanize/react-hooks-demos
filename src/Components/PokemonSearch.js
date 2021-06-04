import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function PokemonSearch() {
	const { setPokemon } = useContext(AppContext);

	return (
		<div id="pokemon-search">
			<h2>Input a Pokemon's Name (or Number)</h2>
			<input id="user-input" />
			<button
				onClick={(e) => {
					const newPokemonNum = document.querySelector("#user-input").value;
					if (newPokemonNum > 0 && newPokemonNum < 899) {
						setPokemon(newPokemonNum);
					}
				}}
			>
				LOOK UP POKEMON
			</button>
		</div>
	);
}

export default PokemonSearch;
