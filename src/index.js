const app = require('./app')
const bytes = require('bytes')

const port = process.env.PORT

const multer = require('multer')
const upload = multer({
  dest: 'images',
  limits: {
    fileSize: bytes('1MB'),
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx)$/)) {
      return cb(new Error('Please upload a Word document'))
    }
    cb(undefined, true)
    // cb(new Error('File must be a PDF'))
    // cb(undefined, true)
    // cb(undefined, false)
  },
})

app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send()
  },
  (error, req, res, next) => {
    res.status(400).send({
      error: error.message
    })
  }
)

app.listen(port, () => {
  console.log('Server is up on port ' + port)
})
