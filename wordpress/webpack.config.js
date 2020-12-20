const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'development'
const mode = env === 'production' ? 'production' : 'development'

const externals = {
    wp: 'wp',
    react: 'React',
    'react-dom': 'ReactDOM',
};

const THEME = 'wp-content/themes/jThompsonArch-backend-theme';
const ENTRY = THEME + '/block.js';

module.exports = {
    mode: env,
    entry: {
        block: './' + ENTRY,
    },
    output: {
        path: path.resolve(__dirname, THEME),
        filename: '[name].min.js',
    },
    externals,
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: true,
                            extends: path.join(__dirname, '/.babelrc'),
                            cacheDirectory: true,
                        }
                    },
                    {
                        loader: 'webpack-import-glob-loader'
                    }
                ]
            }
        ]
    },
    devtool: 'source-map'
}