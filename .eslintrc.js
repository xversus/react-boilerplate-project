module.exports = {
    parser: 'babel-eslint',
    extends: [
        'google',
        'plugin:react/recommended',
        'plugin:jsx-control-statements/recommended',
    ],
    env: {
        'browser': true,
    },
    plugins: [
        'babel',
        'react',
        'jsx-control-statements',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    rules: {
        'require-jsdoc': 'off',
        'react/prop-types': ['error', {ignore: ['children']}],
        'no-invalid-this': 'off',
        'babel/no-invalid-this': 'error',
        'max-len': ['error', {'tabWidth': 2}],
        'react/jsx-no-undef': [2, {'allowGlobals': true}],
        'jsx-control-statements/jsx-jcs-no-undef': 'off',
        'new-cap': 'off',
    },
};
