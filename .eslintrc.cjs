/** @type {import('eslint').Linter.Config} */
module.exports = {
	extends: ["next/core-web-vitals", "prettier"],
	parserOptions: {
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},

	// React 19
	// https://react.dev/learn/react-compiler#installing-eslint-plugin-react-compiler
	plugins: ["eslint-plugin-react-compiler"],
	rules: {
		"react-compiler/react-compiler": "error",
	},
};
