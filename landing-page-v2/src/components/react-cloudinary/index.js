

exports.__esModule = true;
exports.cloudinaryConfig = cloudinaryConfig;
exports.cloudinaryUrl = cloudinaryUrl;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cloudinary = require('./cloudinary');

function cloudinaryConfig(config) {
  cloudinary.config(config);
}

function cloudinaryUrl(publicId, options) {
  return cloudinary.url(publicId, options);
}

const _CloudinaryImage2 = require('./CloudinaryImage');

const _CloudinaryImage3 = _interopRequireDefault(_CloudinaryImage2);

exports.CloudinaryImage = _CloudinaryImage3.default;

const _CloudinaryVideo2 = require('./CloudinaryVideo');

const _CloudinaryVideo3 = _interopRequireDefault(_CloudinaryVideo2);

exports.CloudinaryVideo = _CloudinaryVideo3.default;
