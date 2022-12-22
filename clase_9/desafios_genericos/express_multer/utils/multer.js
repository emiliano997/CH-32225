import multer from 'multer'

const storage = multer.diskStorage({
  destination: function(req, file, callback){
    callback(null, `./upload`)
  },
  filename: function(req, file, callback){
    callback(null, `${Date.now()}-${file.originalname}`)
  }
})

export const uploader = multer({ storage })