const mongoose  = require("mongoose");

const URI = process.env.MONGODB_URI;

//mongoose.connect(URL);

const connectDb =async () => {
    try{
        await mongoose.connect(URI);
        console.log('connection successfull to database');
        

    } catch(error){

        console.error("database connection failed ");
        process.exit(0);
    }
}

module.exports = connectDb