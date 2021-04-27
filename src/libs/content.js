const { getFile } = require("./file");
const { validations } = require("../models/validations");

const splitByLine = async () => {
	const regex = /\r?\n|\r/g;
	const content = await getFile();
	const contentSplited = content.split(regex);

	if (contentSplited.length < 20 || contentSplited > 40)
		throw new Error("O programa fonte deve conter de 20 a 40 linhas");

	return contentSplited.map((item) => {
		if (item === "") return item;

		return item.replace(/^\s+/, "");
	});
};

const validateToken = (token, type) => {
	const match = token.match(type.regex);

	if (match) return type.description + (type.showGroup ? ` ${match[1]}` : "");

	return false;
};

const setLinesDescription = (token) => {
	const definition = [];

	for (const item of validations) {
		const tokenValidation = validateToken(token, item);

		if (tokenValidation) definition.push(tokenValidation);
	}

	if (definition.length < 1) definition.push("Linha ignorada");

	return definition;
};

module.exports = {
	splitByLine,
	validateToken,
	setLinesDescription,
};
