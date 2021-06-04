import "./App.css";
import { useState, useEffect } from "react";
import AppContext from "./Contexts/AppContext";
import PokemonView from "./Components/PokemonView";
import PokemonSearch from "./Components/PokemonSearch";

function App() {
	const [pokemon, setPokemon] = useState(1);
	const [pokeData, setPokeData] = useState(false);
	const [speciesData, setSpeciesData] = useState(false);
	const [language, setLanguage] = useState(false);
	const [version, setVersion] = useState(false);

	useEffect(() => {
		// fetch data when user enters pokemon (i.e. when pokemon state value changes)
		const URL = `https://pokeapi.co/api/v2/pokemon/`;
		function fetchPokemonData() {
			fetch(URL + pokemon)
				.then((res) => res.json())
				.then((pokedata) => {
					setPokeData(pokedata);
					setVersion(pokedata.game_indices[0].version.name); // reset version to the first version that this pokemon appeared in
				});
		}
		fetchPokemonData();
	}, [pokemon]);

	useEffect(() => {
		// get species data when pokeData state value changes
		function fetchSpeciesData() {
			if (pokeData.species) {
				fetch(pokeData.species.url)
					.then((res) => res.json())
					.then((speciesData) => {
						setVersion(speciesData.flavor_text_entries[0].version.name);
						setSpeciesData(speciesData);
					});
			}
		}
		fetchSpeciesData();
	}, [pokeData]);

	useEffect(() => {
		setLanguage(`en`); // reset the language to english (the only language on all versions) when the version changes
	}, [version]);

	return (
		<AppContext.Provider
			value={{
				setPokemon,
				speciesData,
				pokeData,
				language,
				setLanguage,
				version,
				setVersion,
			}}
		>
			<div className="App">
				<h1>useContext Hook Demo</h1>
				<h2>🔻🔻🔻 Remember This? 🔻🔻🔻</h2>
				<PokemonSearch />
				{pokeData.name && speciesData.name ? <PokemonView /> : <></>}
			</div>
		</AppContext.Provider>
	);
}

export default App;
