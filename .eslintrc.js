module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "jest"
    ],
    "rules": {
        quotes: ["error", "double"],
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "no-throw-literal": "off"
    },
    "settings": {
        "import/resolver": {
            typescript: {}
        }
    }
};
