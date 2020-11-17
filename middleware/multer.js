const multer = require("multer");

const imgSmall = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("File must be an image type"));
    }

    cb(undefined, true);
  },
});

module.exports = imgSmall;
