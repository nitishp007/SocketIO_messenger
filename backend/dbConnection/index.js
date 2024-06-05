import mongoose from 'mongoose';

const DB_CONNECTION_URL = "mongodb://localhost:27017";

const connectDB = () =>{
     console.log("DB trying to connect on" + new Date());
    return mongoose.connect(DB_CONNECTION_URL);
}

export default connectDB;