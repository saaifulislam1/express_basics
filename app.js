const express = require("express");
const bodyParser = require("body-parser");
const path= require ('path')

const port = 3000;

const app = express();
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));

// serving file staticly

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin',adminRoutes);
app.use(shopRoutes);

// error page make

app.use ((req,res,next)=>{
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})





app.listen(port, () => {
  console.log(`Listing on port http://localhost:${port}`);
});

// Documentation:

// we must always send one response to the client , and make sure not two different response are being sent to the client in one request.

// Basically we are using app.post so it oly
