const fs = require("fs");

const getFile = () => {
	const file = process.argv.slice(2);

	if (file.length > 1) throw new Error("Envie apenas um arquivo para leitura");

	return new Promise((resolve, reject) => {
		fs.readFile(file[0], "utf8", (err, data) => {
			if (err) reject(data);

			resolve(data);
		});
	});
};

const splitByLine = async () => {
	const regex = /\r?\n|\r/g;
	const content = await getFile();
	const contentSplited = content.split(regex);

	return contentSplited.map((item) => {
		if (item === "") return item;

		return item.replace(/^\s+/, "");
	});
};

const validations = [
	{
		regex: /(\w.+)(|\s)=/,
		description: "Atribuição de valores a uma variável",
	},
	{
		regex: /function\s(.+)\(((|.+))\)(|\s){/,
		description: "Declaração de uma função chamada",
		showGroup: true,
	},
	{
		regex: /(\+|-|\*|\/)/,
		description: "Operação matemática",
	},
	{
		regex: /(while((|.+))\))|for(|\s)(\()/,
		description: "Estrutura de controle de repetição",
	},
	{
		regex: /return(|\s)/,
		description: "Retorno de valor",
	},
	{
		regex: /(|(\r?\n|\r)|\s)}/,
		description: "Fechamento de bloco de código",
	},
	{
		regex: /^(?!for|while|if|function)(.+[a-zA-Z])\(((|.+))\)/,
		description: "Chamada de função",
	},
	{
		regex: /if(|\s)((|.+))\)(|\s){/,
		description: "Estrutura de controle condicional",
	},
];

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

const result = (tokens) => {
	const linesDescription = tokens.map(setLinesDescription);

	for (let index = 0; index < linesDescription.length; index++) {
		for (const item of linesDescription[index]) {
			console.log(`linha ${index + 1}: ${item}`);
		}
	}
};

const bootstrap = async () => {
	const lines = await splitByLine();
	console.log({ lines });
	result(lines);
};

bootstrap();
