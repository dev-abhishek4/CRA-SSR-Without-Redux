const babelConfig = require('../babel-config');

// ignore css, scss, images request when serving from node
require('ignore-styles');

// as we are using ES6 and JSX syntax, we will need to compile with Babel and preset-react
// configure to use import rather than require going forward
require('@babel/polyfill');
require('@babel/register')(babelConfig);

// fire up the server
require('./server');