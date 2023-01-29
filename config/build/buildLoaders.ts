import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

export const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const { isDev } = options;

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: /\.module\./i,
                        localIdentName: isDev ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]'
                    },

                }
            },
            "sass-loader",
        ],
    }

    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        tsLoader,
        cssLoader
    ];
}