const { result } = require("./libs/print");
const { splitByLine } = require("./libs/content");

const bootstrap = async () => {
	const lines = await splitByLine();
	result(lines);
};

bootstrap();
