var express = require('express');
var router = express.Router();
const formidable = require('formidable');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: '圖片上傳' });
});

/* 圖片上傳 */
router.post('/', (req, res, next) => {
  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: __dirname + '/../public/images',
    keepExtensions: true
  });
  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err);
      return;
    }
    let imgUrl = '/images/' + files.portraitFile[0].newFilename;
    res.render('index', {
      imgUrl: imgUrl,
      title: '上傳成功'
    });
  });
});

module.exports = router;
