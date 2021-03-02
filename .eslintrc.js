module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: 10,
        project: ["tsconfig.json"],
        ecmaFeatures: {
            jsx: true,
        },
    },
    extends: [
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:@typescript-eslint/recommended",
        "plugin:jest/recommended",
        "prettier",
        "plugin:prettier/recommended",
    ],
    plugins: [
        "react-hooks",
        "@typescript-eslint/eslint-plugin",
        "testing-library",
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    rules: {
        "prettier/prettier": [
            "error",
            {
                endOfLine: "auto",
            },
        ],
        "@typescript-eslint/no-var-requires": 0,
        "react/no-danger": "off",
        "react/prop-types": "off",
        "react/jsx-filename-extension": [
            "error",
            { extensions: [".js", ".tsx", ".stories.tsx", ".ts", ".jsx"] },
        ],
    },
}
