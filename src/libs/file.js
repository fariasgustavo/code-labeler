const fs = require("fs");

const getFile = () => {
	const file = process.argv.slice(2);

	if (file.length > 1) throw new Error("Envie apenas um arquivo para leitura");

	console.log(`Filename: ${file[0]}\n`);

	return new Promise((resolve, reject) => {
		fs.readFile(file[0], "utf8", (err, data) => {
			if (err) reject(data);

			resolve(data);
		});
	});
};

module.exports = {
	getFile,
};
