import terser from '@rollup/plugin-terser';
import babel from '@rollup/plugin-babel'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    plugins: [
        terser(),
      babel({
        exclude: 'node_modules/**'
      })
    ],
    output: {
      file: pkg.main,
      format: 'cjs'
    },
    external: [
      ...Object.keys(pkg.peerDependencies)
    ]
  }
]
