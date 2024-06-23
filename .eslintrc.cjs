module.exports = {
    env: {
        es2021: true,
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['~', './src/']],
                extensions: ['.ts', '.js', '.tsx'],
            },
        },
    },
    extends: 'airbnb',
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'no-console': 'off',
        'indent': 'off',
    },
};
