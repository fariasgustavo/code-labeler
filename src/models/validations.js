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

module.exports = {
	validations,
};
