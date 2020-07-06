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
    block('module', 'es', []),
    block('main', 'umd', [])
];