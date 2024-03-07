module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["standard", "plugin:react/recommended"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/react-in-jsx-scope": "off",
        quotes: ["error", "double", { avoidEscape: true }],
        semi: ["error", "always"],
        indent: ["error", 4],
        "comma-dangle": ["error", "only-multiline"],
        "space-before-function-paren": "off",
        "react/prop-types": "off"
    },
};
