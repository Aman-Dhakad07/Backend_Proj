const mongoose  = require("mongoose");

require("dotenv").config();


const connectWitDb = () => {
      mongoose.connect(process.env.DATABASE_URL,{  
        
        useNewUrlParser:true,
        useUnifiedTopology:true,
      })
      .then(() => console.log("DB connected Successfully"))
      .catch((error) => {
        console.log("DB facing connectin issues");
        console.log(error);
        process.exit(1);
      })
     
};

module.exports = connectWitDb;