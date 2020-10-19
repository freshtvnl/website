var path = require("path");
module.exports = {
  entry: {
    app: './themes/uptimemate/assets/js/cms/app.js'
  },
	output: {
		path: path.join(__dirname, "./themes/uptimemate/assets/js"),
		filename: 'cms.bundle.js',
	},
}