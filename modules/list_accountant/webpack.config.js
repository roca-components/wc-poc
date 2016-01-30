/*eslint-env node */
"use strict";

let path = require("path");

module.exports = {
	entry: __dirname + "/src/index.js",
	output: {
		path: path.resolve(__dirname + "/dist"),
		filename: "bundle.js"
	},
	resolve: {
		root: path.resolve("./node_modules")
	},
  externals: {
    "list_counter": "ListCounter"
  },
	module: {
		loaders: [{
			loader: "babel-loader",
			query: {
				presets: ["es2015"],
				cacheDirectory: true
			}
		}]
	}
};
