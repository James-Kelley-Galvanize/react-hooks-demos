import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function FlavorText() {
	const { speciesData, version, language, setLanguage } =
		useContext(AppContext);

	const flavorTextEntries = speciesData.flavor_text_entries;

	const correctLangEntry = flavorTextEntries.find(
		(entry) =>
			entry.version.name === version && entry.language.name === language
	);
	if (!correctLangEntry) {
		// setLanguage(`en`);
	}
	const correctFlavorText = !flavorTextEntries
		? ``
		: correctLangEntry
		? correctLangEntry.flavor_text
		: flavorTextEntries.find((entry) => entry.version.name === version)
				.flavor_text;

	return flavorTextEntries ? (
		<>
			<div id="flavor-text" style={{ margin: `2%` }}>
				{correctFlavorText}
			</div>
		</>
	) : (
		<></>
	);
}

export default FlavorText;
