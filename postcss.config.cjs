const fs = require("fs");

function append(data) {
	fs.appendFile("classes.json", JSON.stringify(data) + "\n", function (err) {
		if (err) throw err;
	});
}

let config = {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};

if (process.env.PROD == "true") {
	fs.writeFileSync("classes.json", "", { encoding: "utf8", flag: "w" });

	config.plugins = {
		...config.plugins,
		cssnano: {
			preset: "advanced",
		},
		"postcss-discard-comments": {
			removeAll: true,
		},
		"postcss-replace": {
			pattern: "--(tw)-",
			data: {
				tw: "--fs-",
			},
		},
		"postcss-rename": {
			strategy: "minimal",
			by: "whole",
			outputMapCallback: append,
		},
	};
}

module.exports = config;
