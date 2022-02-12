const express= require('express');
const path = require ('path');

const router= express.Router();

router.get("/", (req, res, next) => {

  // __dir name suggest same folder, 
  //dot slash takes it back to root folder
  // then folder name and file name

  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'))

  
  });


module.exports= router;