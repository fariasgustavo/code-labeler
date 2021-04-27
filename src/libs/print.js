const { setLinesDescription } = require("./content");

const result = (tokens) => {
	const linesDescription = tokens.map(setLinesDescription);

	for (let index = 0; index < linesDescription.length; index++) {
		for (const item of linesDescription[index]) {
			console.log(`linha ${index + 1}: ${item}`);
		}
	}
};

module.exports = {
	result,
};
