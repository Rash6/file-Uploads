const multer = require('multer');

const path = require("path")

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, '../uploads'));
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now();
		cb(null, uniqueSuffix + '-' + file.originalname);
	},
});

function fileFilter(req, file, cb) {
	console.log({ file });

	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(new Error('Incorrect mime type'), false);
	}
}

const options = {
	storage,
	fileFilter,
	limits: {
		filesize: 1024 * 1034 * 5,
	},
};

module.exports = multer(options);
