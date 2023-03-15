import { WebpackConfiguration } from 'webpack-cli';
import path from 'path';
import webpack, { RuleSetRule } from 'webpack';
import { BuildPaths } from '../build/types/config';
import buildCssLoader from '../build/loaders/buildCssLoader';
import buildSvgLoader from '../build/loaders/buildSvgLoader';

export default ({ config }: {config: WebpackConfiguration}) => {
    const paths: BuildPaths = {
        html: '',
        build: '',
        entry: '',
        src: path.resolve(__dirname, '../', '../', 'src'),
    };

    config!.resolve!.modules!.push(paths.src);
    config!.resolve!.extensions!.push('.ts', '.tsx');
    // eslint-disable-next-line no-param-reassign
    config!.resolve!.alias = {
        '@': paths.src,
    };

    // eslint-disable-next-line no-param-reassign
    // @ts-ignore
    config!.module!.rules = config!.module!.rules!.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg/i };
        }

        return rule;
    });

    config!.module!.rules.push(buildSvgLoader());
    config!.module!.rules.push(buildCssLoader(true));

    config!.plugins!.push(new webpack.DefinePlugin({
        __IS_DEV__: true,
        __API__: true,
    }));

    return config;
};
