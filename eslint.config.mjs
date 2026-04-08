import pluginJs from "@eslint/js";
import globals from "globals";

export default [
	pluginJs.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.node,
				...globals.jest, // Por si usas tests
			},
		},
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
			"no-console": "off",
		},
	},
];
