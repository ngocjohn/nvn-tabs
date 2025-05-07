import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'es',
		sourcemap: false,
	},
	plugins: [
		resolve(),
		typescript({
			tsconfig: './tsconfig.json',
		}),
	],
};
