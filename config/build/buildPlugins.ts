import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const { paths, isDev } = options;

    return [
        new HtmlWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        }),
        new webpack.ProgressPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new ReactRefreshPlugin()
    ]
};