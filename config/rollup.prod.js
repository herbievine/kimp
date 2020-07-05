import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import { terser } from "rollup-plugin-terser";

const block = (name, format, plugins) => {
    return {
        input: 'build/kimp.js',
        output: {
            file: `dist/${name}/kimp.js`,
            format: format,
            strict: false,
            name: name,
            banner: `// env: ${name} - Copyright 2020 Herbie Vine - Updated: ${new Date()}`
        },
        plugins,
        external: [
            'crypto'
        ]
    }
}

export default [
    block('module', 'es', [
        terser()
    ]),
    block('main', 'umd', [
        terser(),
        resolve(),
        json(),
        commonjs()
    ])
];