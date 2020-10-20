var path = require("path");
module.exports = {
  entry: {
    app: './themes/freshtv/assets/js/cms/app.js'
  },
	output: {
		path: path.join(__dirname, "./themes/freshtv/assets/js"),
		filename: 'cms.bundle.js',
	},
}