import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

function Controllers() {
	const { speciesData, pokeData, setVersion, version, language, setLanguage } =
		useContext(AppContext);
	const flavorTextEntries = version ? speciesData.flavor_text_entries : [];

	// console.log(`flavortext in controllers`, flavorTextEntries);

	const languages = flavorTextEntries
		? flavorTextEntries
				.filter((entry) => entry.version.name === version)
				.map((entry) => entry.language.name)
		: [];

	const versionsSet = flavorTextEntries.reduce((set, entry) => {
		set.add(entry.version.name);
		return set;
	}, new Set());
	const versions = [...versionsSet];

	const languageButtons = languages.map((langName) => {
		const isSelectedLang = langName === language;
		return (
			<button
				key={langName}
				style={{ fontSize: isSelectedLang ? `large` : `medium` }}
				onClick={() => setLanguage(langName)}
			>
				{langName}
			</button>
		);
	});

	const versionButtons = versions.map((ver) => {
		const isSelectedVersion = version === ver;
		return (
			<button
				key={ver}
				onClick={() => setVersion(ver)}
				style={{ fontSize: isSelectedVersion ? `large` : `medium` }}
			>
				{ver}
			</button>
		);
	});

	return (
		<div id="controllers">
			<div id="version-selector">{versionButtons}</div>
			<div id="language-selector">{languageButtons}</div>
		</div>
	);
}
export default Controllers;
