/* eslint-disable import/no-anonymous-default-export */
import typescript from 'rollup-plugin-typescript2';


export default {

    input: 'src/index.ts',

    output: [{
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true
    }, {
        file: 'dist/index.esm.js',
        format: 'esm',
        exports: 'named',
        sourcemap: true
    }],

    plugins: [

        typescript({
            clean: true,
            tsconfigOverride: {
                exclude: []
            }
        })

    ]

};