export default {
    input: 'build/kimp.js',
    output: {
        file: 'dist/kimp.js',
        format: 'cjs',
        strict: false,
        banner: `#! /usr/bin/env node - Copyright 2020 Herbie Vine - Updated: ${new Date()}`
    },
    external: [
        'crypto'
    ]
};