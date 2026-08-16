import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import filesize from 'rollup-plugin-filesize';
import pkg from './package.json' with { type: 'json' };


const externalIds = [...Object.keys(pkg.peerDependencies ?? {})];
const external = (id) => externalIds.some((dep) => id === dep || id.startsWith(dep + '/'));

export default [{

    input: 'src/index.ts',
    external,

    plugins: [
        nodeResolve({ extensions: ['.js', '.ts'] }),
        commonjs(),
        typescript({ tsconfig: 'tsconfig.build.json' }),
        filesize()
    ],

    output: [{
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true
    }]

}];
