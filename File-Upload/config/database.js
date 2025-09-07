
const mongoose = require("mongoose");

require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL , {
        // No need to write these in new version of Express
        //  useNewUrlParser:true,
        //  useUnifiedTopology:true,
    })
    .then(console.log("DB connection successful"))
    .catch( (error) => {
        console.log("DB Connection issues");
        console.error(error);
        process.exit(1);
    })
}