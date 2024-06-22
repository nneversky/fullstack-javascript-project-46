module.exports = {
    plugins: ['jest'],
    env: {
        node: true,
        jest: true,
    },
    extends: ['airbnb-base', 'plugin:jest/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'indent': 'off',
        'no-console': 'off',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'always',
            },
        ],
        'no-underscore-dangle': ['error', { allow: ['__filename', '__dirname'] }],
    },
};
