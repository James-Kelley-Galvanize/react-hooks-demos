import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function FlavorText() {
	const { speciesData, version, language } = useContext(AppContext);

	const flavorTextEntries = speciesData.flavor_text_entries;

	const correctFlavorText = flavorTextEntries.reduce((str, entry) => {
		if (entry.version.name === version && entry.language.name === language)
			str += entry.flavor_text;
		return str;
	}, ``);

	return (
		<>
			<div id="flavor-text" style={{ margin: `2%` }}>
				{correctFlavorText}
			</div>
		</>
	);
}

export default FlavorText;
