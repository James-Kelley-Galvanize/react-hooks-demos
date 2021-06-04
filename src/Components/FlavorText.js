import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function FlavorText() {
	const { speciesData, version, language } = useContext(AppContext);

	const flavorTextEntries = speciesData.flavor_text_entries;

	const correctFlavorText = flavorTextEntries.reduce((str, entry) => {
		// conditional-ish rendering - use reduce to make a string, no matter what
		if (entry.version.name === version && entry.language.name === language)
			str += entry.flavor_text;
		return str;
	}, ``);

	return (
		<div
			id="flavor-text-container"
			style={{ display: `flex`, justifyContent: `center` }}
		>
			<div
				id="flavor-text"
				style={{
					fontSize: `large`,
					width: `50vw`,
					backgroundColor: `lightgrey`,
					borderRadius: `2em`,
					padding: `1em`,
				}}
			>
				{correctFlavorText}
			</div>
		</div>
	);
}

export default FlavorText;
