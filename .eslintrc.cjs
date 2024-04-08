/** @type {import("eslint").Linter.Config} */
const config = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": true,
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "unused-imports"
    ],
    "extends": [
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked",
        "plugin:@typescript-eslint/recommended",
        "eslint:recommended",
        "prettier",
        "plugin:prettier/recommended"
    ],
    "rules": {
        "@typescript-eslint/array-type": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
        "@typescript-eslint/consistent-type-imports": [
            "warn",
            {
                "prefer": "type-imports",
                "fixStyle": "inline-type-imports"
            }
        ],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unsafe": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                "checksVoidReturn": {
                    "attributes": false
                }
            }
        ],
        "@typescript-eslint/no-explicit-any": "warn",
        "prettier/prettier": "error",
        "unused-imports/no-unused-imports": "warn",
        "unused-imports/no-unused-vars": [
            "warn",
            {
                "vars": "all",
                "varsIgnorePattern": "^_",
                "args": "after-used",
                "argsIgnorePattern": "^_"
            }
        ],
        "no-undef": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "indent": "off"
    }
}
module.exports = config;
