const { Router } = require('express')
const multer = require('multer')
const path = require('path')

const router = Router()

const filename = (req, file, callback) => {
    callback(null, file.originalname)
  }

const storage = multer.diskStorage({
  destination: 'api/uploads/',
  filename
})

const fileFilter = (req, file, callback) => {
  if (file.mimetype !== 'image/png') {
    req.fileValidationError = 'Wrong file type'
    return callback(null, false, new Error('Wrong file type'))
  } else {
    callback(null, true)
  }
}

const photoPath = path.resolve(__dirname, '../../client/photo-viewer.html')

const upload = multer({
  storage,
  limits: { filesize: 10000 },
  fileFilter
})

router.post('/upload', upload.single('photo'), async (req, res) => {
  if (req.fileValidationError) {
    return res.status(400).json({ error: req.fileValidationError})
  }

  return res.status(201).json({ success: true })
})

module.exports = router
