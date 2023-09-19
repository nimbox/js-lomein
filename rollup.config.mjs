import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import filesize from 'rollup-plugin-filesize';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import { createRequire } from 'node:module';

const requireFile = createRequire(import.meta.url);
const pack = requireFile('./package.json');


export default {

    input: 'src/index.ts',

    output: [{
        file: pack.main,
        format: 'cjs',
        sourcemap: true
    }, {
        file: pack.module,
        format: 'esm',
        exports: 'named',
        sourcemap: true
    }],

    plugins: [

        peerDepsExternal(),
        resolve(),
        commonjs(),

        typescript(),
        filesize(),

    ]

};
