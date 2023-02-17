import webpack from 'webpack';
import { BuildOptions } from './types/config';
import buildCssLoader from './loaders/buildCssLoader';
import buildSvgLoader from './loaders/buildSvgLoader';

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        },
    };

    const svgLoader = buildSvgLoader();

    const cssLoader = buildCssLoader(isDev);

    const babelLoader = {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    [ '@babel/preset-env', { targets: 'defaults' } ],
                ],
            },
        },
    };

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        fileLoader,
        svgLoader,
        babelLoader,
        tsLoader,
        cssLoader,
    ];
};
