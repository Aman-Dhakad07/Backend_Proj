/// Create app
const express  = require("express");
const app = express();


// find the ports
require("dotenv").config();
const PORT  = process.env.PORT || 3000;

//add middlewares

app.use(express.json());
const fileupload  = require("express-fileupload");
app.use(fileupload({
    useTempFiles:true,
    tempFileDir: '/temp/'
}));


//Connect to DB
const db = require("./config/database");
db.connect();

//Connect to Cloud
const cloudinary  =require("./config/cloudinary");
cloudinary.cloudinaryConnect();


//Mount API route  
const Upload = require("./routes/FileUpload");
app.use('/api/v1/upload', Upload);


//activate server 
app.listen(PORT ,  () => {
    console.log(`App is running at ${PORT}`);
})