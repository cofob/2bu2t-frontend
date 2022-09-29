let config = {
	plugins: {
		"postcss-import": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};

if (process.env.PROD == "true") {
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
	};
}

module.exports = config;
