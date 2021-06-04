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

	const languages = flavorTextEntries
		? flavorTextEntries
				.filter((entry) => entry.version.name === version)
				.map((entry) => entry.language.name)
		: [];

	const versionsSet = flavorTextEntries.reduce((set, entry) => {
		set.add(entry.version.name);
		return set;
	}, new Set());

	const versions = [...versionsSet]; // spread the versionsSet into an array

	const languageButtons = languages.map((langName) => {
		const isSelectedLang = langName === language;
		return (
			<button
				key={langName}
				style={{
					border: `0.16em solid rgba(255,255,255,0)`,
					borderRadius: `2em`,
					fontWeight: `bold`,
					backgroundColor: isSelectedLang ? `lightgreen` : `lightgrey`,
					margin: "1px",
				}}
				onClick={() => setLanguage(langName)}
			>
				{languageNames[langName]}
			</button>
		);
	});

	const versionButtons = versions.map((ver) => {
		const isSelectedVersion = version === ver;
		return (
			<button
				key={ver}
				onClick={() => setVersion(ver)}
				style={{
					border: `0.16em solid rgba(255,255,255,0)`,
					borderRadius: `2em`,
					fontWeight: isSelectedVersion ? `bolder` : `bold`,
					backgroundColor: isSelectedVersion ? `lightgreen` : `lightgrey`,
					margin: "2px",
				}}
			>
				{ver}
			</button>
		);
	});

	function VersionButtonRows() {
		return versionButtons
			.reduce((arr, button, index) => {
				let rowNum = Math.floor(index / 10);
				if (!arr[rowNum]) arr[rowNum] = [];
				arr[rowNum].push(button);
				return arr;
			}, [])
			.map((row, index) => (
				<div className="version-button-row" key={`row` + index}>
					{row}
				</div>
			));
	}

	return (
		<div id="controllers">
			<h4>Versions</h4>
			<div id="version-selector">
				<VersionButtonRows />
			</div>
			<h4>Languages</h4>
			<div id="language-selector">{languageButtons}</div>
		</div>
	);
}
export default Controllers;
