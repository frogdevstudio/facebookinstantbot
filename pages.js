var VERIFY_TOKEN = "EAADqWjBZB7owBAOOgLIdYkRkC8t3lTHWdT4RmQpc6Jqdp1igj7QTfHAGf1KxeLpb8RKYokWBZADcuZBIcPG3cTLDhx8CTP0DBR63oWpIEKaxAem48e4WEz3SCRDaUiEJe9rHt540TT5Wp2NrF1QnP7JFq5VJiaKMQZAhi7gzgS5f3kBMg5t7";
var PAGES = [
	// Add your pages here, change key for each one, I use numberical values starting at 0
	{
		id: "297646080934977",
		name: "Merge Spaceship IDLE",
		key: "0",
		title: "Don't forget your daily free coins",
		subtitle: "We miss you, come back and play",
		cta: "Play Now",
		imageurl: "<URL of image to show in message>",
		payload: null,
		pat: "EAADqWjBZB7owBAOOgLIdYkRkC8t3lTHWdT4RmQpc6Jqdp1igj7QTfHAGf1KxeLpb8RKYokWBZADcuZBIcPG3cTLDhx8CTP0DBR63oWpIEKaxAem48e4WEz3SCRDaUiEJe9rHt540TT5Wp2NrF1QnP7JFq5VJiaKMQZAhi7gzgS5f3kBMg5t7",
	},
];

function GetGame(page_id)
{
	for (var t = 0; t < PAGES.length; t++)
	{
		if (page_id === PAGES[t].id)
			return PAGES[t];
	}
}

function GetPage(which)
{
	return PAGES[which];
}

function GetVertifyToken()
{
	return VERIFY_TOKEN;
}

module.exports = 
{
	GetGame,
	GetPage,
	GetVertifyToken,
};
