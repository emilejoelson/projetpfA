
const express=require('express');
const router=express.Router();
const multer = require("multer");

//Midleware
router.use(express.urlencoded({extended: false}));
//importation
const prod=require('../controllers/Controller');
const fileUpload=require('../utils/fileUpload');
//Router

router.get("/",(req,res,next)=>{
    res.send("ANDRIAMIHAJA Joelson Emile ");
});

//Concernant le user
router.post("/signup",prod.singup);
router.post("/login",prod.login);
router.get("/getuser",prod.getuser);
router.delete("/deleteuser/:id",prod.deleteuser);
//Concernant le produit
router.post("/uploadProduct",prod.uploadproduct);
router.get("/getproduct",prod.getproduct);
router.delete("/deleteproduct/:id",prod.deleteproduct);
router.put("/updateproduct/:id",prod.updateproduct);
router.post("/checkoutpayement/",prod.checkoutpayement);

module.exports=router;