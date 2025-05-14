// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";

import eslintPluginPrettierRecommended
    from "eslint-plugin-prettier/recommended";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigDirName: import.meta.dirname,
                "ecmaFeatures": {
                    "jsx": true
                }
            }
        }
    },
    {
        files: ["**/*.js"],
        ...tseslint.configs.disableTypeChecked
    },
    {
        ...reactRecommended,
        "settings": {
            "react": {
                "version": "detect",
            }
        },
        rules:
            {"react/jsx-uses-react": "off",
                "react/react-in-jsx-scope": "off"}

    },
    {
        plugins: {
            'react-hooks': eslintPluginReactHooks
        },
        rules: {
            ...eslintPluginReactHooks.configs.recommended.rules
        }
    },
    {
        plugins: {
            'jsx-a11y': pluginJsxA11y,
        },
        rules: pluginJsxA11y.configs.recommended.rules,
    },
    {
        files: ["**/*.test.ts", "**/*.test.tsx", "**/*.integration.tsx"],
    },
    eslintPluginPrettierRecommended
);