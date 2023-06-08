const multer=require('multer');
const path=require('path');

var storage= multer.diskStorage({
        destination: function(req,file,cb){
            cb(null,"./uploads/images");
        },
        filename: function(req,file,cb){
            return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
        },
    });


var fileUpload=  multer({
    storage:storage,
    limits:{
        fieldSize: 2*1024*1024,
    },
    fileFilter:(req,file,cb) => {
        if(file.mimetype =="image/png" || file.mimetype=="image/jpg"
         || file.mimetype == "image/jpeg"){
            cb(null,true);
         }
         else{
            cb(null,false);
            return cb(new Error("only .png, .jpg, .jpeg format allowed"));
         }
    },
    onError: function(err,next){
        return console.log('error',err);
        next(err);
    }
}).single('image');

module.exports= fileUpload;