const express= require('express')
const path= require ('path')

const router= express.Router();
// const rootDir= require('../utils/path');

// admin/addproduct
router.get("/add-product", (req, res, next) => {
    // html file er vetorer form er /add-product
    // .post er add-product er sathe connect korche
    res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
 
    });

    // this take action via form
    router.post('/add-product', (req,res,next)=>{
        console.log(req.body);
        res.redirect('/')
    })


module.exports=router;