import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { BuildOptions } from './types/config';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const { paths, isDev } = options;

    const plugins = [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        new webpack.ProgressPlugin(),
    ];

    if (isDev) {
        plugins.push(
            new ReactRefreshPlugin({
                overlay: false,
            }),
        );

        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
        );

        plugins.push(
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
};
