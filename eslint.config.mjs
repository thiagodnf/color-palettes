export default [{
    languageOptions: {
        ecmaVersion: 13,
        sourceType: "module",

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                modules: true,
                experimentalObjectRestSpread: true,
            },

            requireConfigFile: false,

            babelOptions: {
                presets: ["@babel/preset-react"],
            },
        },
    },

    rules: {
        semi: ["error", "always"],
        quotes: [2, "double"],
        "comma-style": ["error", "last"],
    },
}];