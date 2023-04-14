const PublicGoogleSheetsParser = require("public-google-sheets-parser");
const fs = require("fs");

const ids = {
	authors: "1cWclIBGv4beS1-wzL0T87EISmZ1x9z3UbOWgDvg9PbQ",
	contributions: "1GeVEZF32bms0KI7jucZDXgboOIH0T7cs68ipQZ2vke8",
	programme: "1dgpzjSvXbRnM_zOm_MnzmJ5ePvR_YfErrKmJkhhyjpA",
	people: "1fTq8PayGg3y3U0vUidRSj6w6UaDAEdqg0AwOn9KRR5U"
};

console.log("fetching data");

const parser = new PublicGoogleSheetsParser();

console.log("authors");
parser.parse(ids.authors).then((authors) => {
	fs.writeFileSync("./data/authors.json", JSON.stringify(authors, null, 2), { encoding: "utf8" });

	console.log("contributions");
	parser.parse(ids.contributions).then((contributions) => {
		fs.writeFileSync("./data/contributions.json", JSON.stringify(contributions, null, 2), { encoding: "utf8" });

		console.log("programme");
    parser.parse(ids.programme).then((programme) => {
      fs.writeFileSync("./data/programme.json", JSON.stringify(programme, null, 2), { encoding: "utf8" });

			console.log("people");
			parser.parse(ids.people).then((people) => {
				fs.writeFileSync("./data/people.json", JSON.stringify(people, null, 2), { encoding: "utf8" });
			});
    });
	});
});
