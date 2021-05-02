module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
        // these will allow us to use import rather than require
        '@babel/plugin-syntax-dynamic-import',
        'dynamic-import-node',
    ]
};