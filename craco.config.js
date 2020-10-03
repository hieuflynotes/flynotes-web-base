const HtmlWebpackPlugin = require('html-webpack-plugin');
const { when, whenDev,whenProd } = require("@craco/craco");
const path = require('path');
module.exports = {
    devServer:{
        historyApiFallback: true
    },
    babel: {
        presets: [
            "@babel/preset-react",
            "@babel/preset-env"
        ],
        plugins:[
            "@babel/plugin-proposal-class-properties",
            "@babel/plugin-proposal-object-rest-spread",
            ...whenProd(()=>[["transform-remove-console", { "exclude": [ "error", "warn"] }]],[])
        ]
    },
    eslint:{
        enable: true,
        configure:{
            rules: {
                "no-unused-vars": "off",
                "no-implicit-dependencies": "off"
            }
        }
    },
    tslint:{
        enable: true,
        configure:{
            rules: {
                "no-unused-vars": "off",
                "no-implicit-dependencies": "off"
            }
        }
    },
    webpack:{
        alias: {
            // Add the aliases for all the top-level folders in the `src/` folder.
            "flynotes-base":path.resolve(__dirname,"src/submodules/flynotes-base/"),
            "flynotes-menu":path.resolve(__dirname,"src/submodules/flynotes-menu/"),
            "@Core":path.resolve(__dirname,"src/submodules/flynotes-base/"),
            "~":path.resolve(__dirname,""),
        },
        plugins: [
            new HtmlWebpackPlugin({
                hash: true,
                title: "Flynotes App",
                minify:{
                    collapseWhitespace: true,
                    removeComments: true,
                    removeRedundantAttributes: true,
                    removeScriptTypeAttributes: true,
                    removeStyleLinkTypeAttributes: true,
                    useShortDoctype: true,
                    minifyJS:{
                        compress:{
                            drop_console: true
                        },
                        output: {
                            comments: false
                        }
                    }
                }
            })
        ]
    }
}
