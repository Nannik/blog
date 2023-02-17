import webpack from 'webpack';
import { BuildOptions } from './types/config';

export const buildResolvers = (options: BuildOptions): webpack.ResolveOptions => ({
    extensions: [ '.tsx', '.ts', '.js' ],
    preferAbsolute: true,
    modules: [ options.paths.src, 'node_modules' ],
    mainFiles: [ 'index' ],
    alias: {
        '@': options.paths.src,
    },
});
