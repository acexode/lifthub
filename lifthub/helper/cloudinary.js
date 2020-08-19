const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer  = require('multer')


cloudinary.config({
    cloud_name: 'acexode',
    api_key: '779322983946522',
    api_secret: '7NixG7UM_MMtYHK_whBHhAxI7Iw'
});
// 
const OGstorage = cloudinaryStorage({
    cloudinary: cloudinary,
    folder: "space",
    allowedFormats: ["jpg", "png"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
});
const upload = multer({ storage: OGstorage })

router.post('/upload', upload.array('deviceImage', 12), function (req, res, next) {    
    if(req.files){
     
      const images = req.files.map(data => data.secure_url )
      console.log(images);
      res.json({ success: true, message: "uploaded sucessfully", images });
     
    }else{
      res.json({ success: false, message: "upload failed" });
    }
  })