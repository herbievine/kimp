const { defaults } = require('jest-config');
const crypto = require('crypto');

module.exports = {
    globals: {
        ...defaults.globals,
        crypto: crypto,
    }
};