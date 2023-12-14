const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const devMode = process.env.NODE_ENV === 'production';

module.exports = {
    entry: path.join(__dirname, 'src', 'js', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'js/[name].js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    '@babel/preset-env',
                                    { targets: "defaults" }
                                ]
                            ]
                        }
                    },
                ],
            },
            {
                test: /\.(scss|css)$/,
                //exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                        }
                    },
                    'postcss-loader',
                    'sass-loader',
                ],

            },
            {
                test: /\.(svg|jpe?g|png|webp|ico)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.join('img', '[name][ext]')
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: path.join('fonts', '[name][ext]')
                }
            },
        ],
    },
    plugins: [
         new MiniCssExtractPlugin({
           filename: 'css/[name].css',
         }),
    ],
};