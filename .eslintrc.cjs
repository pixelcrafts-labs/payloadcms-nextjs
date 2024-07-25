/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ["next/core-web-vitals", "prettier", "plugin:@lexical/recommended"],

	parserOptions: {
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
};
