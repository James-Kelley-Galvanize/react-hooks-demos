import { useContext } from "react";
import AppContext from "../Contexts/AppContext";

const languageNames = {
	"ja-Hrkt": `日本語(仮名)`,
	ko: " 한국어",
	"zh-Hant": " 漢語(正體字)",
	fr: "Français ",
	de: "Deutsch",
	es: "Español",
	it: "Italiano",
	en: "English",
	ja: "日本語(漢字)",
	"zh-Hans": " 汉语(简化字)",
};

function Controllers() {
	const { speciesData, setVersion, version, language, setLanguage } =
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

	const languageButtons = languages.map((langName) => {
		const isSelectedLang = langName === language;
		return (
			<button
				key={langName}
				style={{
					fontSize: isSelectedLang ? `large` : `medium`,
					margin: "1px",
				}}
				onClick={() => setLanguage(langName)}
			>
				{languageNames[langName]}
			</button>
		);
	});

	const versionButtons = [...versionsSet].map((ver) => {
		// spread the versionsSet into an array
		const isSelectedVersion = version === ver;
		return (
			<button
				key={ver}
				onClick={() => setVersion(ver)}
				style={{
					fontSize: isSelectedVersion ? `large` : `medium`,
					margin: "1px",
				}}
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
