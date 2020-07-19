export const I18n = {
	NOVALUE: "",
	// only applicable to browser context...
	lang: navigator.language || "en",
	languages: {
		ALARMWINDOW: {
			ALARMTIME: { LABEL: { en: "When", nl: "Tijd" } },
			ALARMTITLE: { LABEL: { en: "Subject", nl: "Onderwerp" } },
			DESCRIPTION: { LABEL: { en: "Description", nl: "Omschrijving" } },
			TITLE: { en: "Set alarm", nl: "Creer alarm" },
			BUTTON: {
				CANCEL: {
					TEXT: { en: "Cancel", nl: "Afbreken" },
				},
				SAVE: { TEXT: { en: "Add", nl: "Bewaar" } },
			},
			ALARMLEVEL: {
				TITLE: { en: "Alarmlevel", nl: "Alarmniveau" },
				LEVELLOW: {
					LABEL: { en: "Low", nl: "Laag" },
				},
				LEVELMODERATE: {
					LABEL: { en: "Moderate", nl: "Matig" },
				},
				LEVELHIGH: { LABEL: { en: "High", nl: "Hoog" } },
			},
		},
	},
	get(token) {
		// create array from token -= e.g. 'val1.val2.val3.title' = ['val1','val2','val3','title']
		const tokens = token.split(".");
		// get last index - eg 'title'
		const leaf = tokens.pop();
		// retrieve last object - eg {title:{en:'Hello world',nl:'Hallo wereld'}}
		const tokenOb = tokens.reduce((val, key) => val[key] || this.NOVALUE, this.languages);
		// return value for appropriate languiage - eg 'Hallo wereld' for lang = 'nl'
		return tokenOb[leaf][this.lang] || this.NOVALUE;
	},
};
