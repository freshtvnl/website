var path = require("path");
module.exports = {
  entry: {
    app: './themes/philflo/assets/js/cms/app.js'
  },
	output: {
		path: path.join(__dirname, "./themes/philflo/assets/js"),
		filename: 'cms.bundle.js',
	},
}