module.exports = {
	root: true,
	env : {
		node: true,
	},
	'extends': [
		'plugin:vue/vue3-essential',
		'@zekfad',
	],
	parser       : 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console' : process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'one-var'    : 'off',
		'array-bracket-newline': 'off'
	},
};
