const File = require("../models/File");
const cloudinary = require("cloudinary").v2;


//localfileupload -> handler function
exports.localFileUpload = async (req,res) => {
    try{
        //fetch file from request
        const file = req.files.file;
        console.log("File AAgayi H -> ",file);

        //Path where the fetched file is uploaded
        let path = __dirname + "/files/" + Date.now() + `.${file.name.split('.')[1]}`;
        console.log("Path-> ", path)

        //to move the uploaded file on this path of server
        file.mv(path , (err)=> {
            console.log(err);

        });

        res.json({
            success:true,
            message:'Local file Uploaded Successfully',
        });

    }catch(error){
        console.log("Not able to upload the file on  server");
         console.log(error)
    }
}

// function to check the file type 
function isFileTypeSupported( type, supportedTypes){
    return supportedTypes.includes(type);
}


//function to upload the file on the cloudinary 
async function uploadFileToCloudinary(file, folder, quality){
     const options = {folder};
     console.log("temp file path: ", file.tempFilePath);

     if(quality){
        options.quality = quality;
     }
    //to detect file type automatically
     options.resource_type = "auto";
     return await cloudinary.uploader.upload(file.tempFilePath, options);
      
}


//image upload ka handler 
exports.imageUpload = async (req, res) => {
    try{
       // data fetch
       const {name, tags, email}  = req.body;
       console.log(name,tags,email);
        
       const file= req.files.imageFile;
       console.log(file);

       // valaidation
       const supportedTypes = ["jpg","jpeg","png"];
       const fileType = file.name.split('.')[1].toLowerCase();
       console.log("First Type:", fileType);


       if(!isFileTypeSupported(fileType, supportedTypes)) {
        return res.status(400).json({
            success:false,
            messge:'file format not supported',
        })
       }

       //file format supported hai
       console.log("Uploading to codehelp");
       //to upload the file on cloudunary in the folder we have created on server 
       const response = await uploadFileToCloudinary(file, "AmanData");
       console.log(response);


    //    db m entry save krni h 
    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url,
     });
    

    res.json({
        success:true,
        imageUrl:response.secure_url,
        message:"Image Successfully Uploaded",
    });





    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        });

    }
}


//video uppload handler

exports.videoUpload = async (req, res) => {
    try{
       // data fetch
       const {name, tags, email}  = req.body;
       console.log(name,tags,email);
        
       const file= req.files.videoFile;
    //    console.log(file);

       // vallaidation
       const supportedTypes = ["mp4","mov"];
       const fileType = file.name.split('.')[1].toLowerCase();
       console.log("First Type:", fileType);


       if(!isFileTypeSupported(fileType, supportedTypes)) {
        return res.status(400).json({
            success:false,
            messge:'video format not supported',
        })
       }

       //file format supported hai
       console.log("Uploading to codehelp");
       //to upload the file on cloudunary in the folder we have created on server 
       const response = await uploadFileToCloudinary(file, "AmanData");
       console.log(response);


    //    db m entry save krni h 
    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url,
     });
    

    res.json({
        success:true,
        imageUrl:response.secure_url,
        message:"video Successfully Uploaded",
    });





    }catch(error){
        console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        });

    }
}


//image size Reducer

exports.imageSizeReducer = async (req, res) => {
    try{

        // console.log("req.files:", req.files);


       // data fetch
       const {name, tags, email}  = req.body;
       console.log(name,tags,email);
        
       const file= req.files.imageFile;
       console.log(file);

       // vallaidation
       const supportedTypes = ["jpg","jpeg","png"];
       const fileType = file.name.split('.')[1].toLowerCase();
       console.log("First Type:", fileType);


       if(!isFileTypeSupported(fileType, supportedTypes)) {
        return res.status(400).json({
            success:false,
            messge:'img format not supported',
        })
       }

       //file format supported hai
       console.log("Uploading to codehelp");
       //to upload the file on cloudunary in the folder we have created on server 
       const response = await uploadFileToCloudinary(file, "AmanData", 30);
       console.log(response);


    //    db m entry save krni h 
    const fileData = await File.create({
        name,
        tags,
        email,
        imageUrl:response.secure_url,
     });
    

    res.json({
        success:true,
        imageUrl:response.secure_url,
        message:"image size reduced Successfully Uploaded",
    });



    }catch(error){
         console.error(error);
        res.status(400).json({
            success:false,
            message:"Something went wrong",
        });

    }
}