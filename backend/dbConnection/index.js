import mongoose from 'mongoose';

const DB_CONNECTION_URL = "mongodb://localhost:27017";

const connectDB = async () =>{
    try{
        const conn =await mongoose.connect(DB_CONNECTION_URL, {
            useNewUrlParser: true,
        });
        console.log("DB is connected: " + new Date());
    }
    catch(error){
        console.log(`DB error: ${error.message}`);
        process.exit();
    }
}

export default connectDB;