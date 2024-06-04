import mongoose from 'mongoose';

const DB_CONNECTION_URL = "mongodb://localhost:27017";

const connectDB = () =>{
     console.log("DB trying to connect on" + new Date());
    const option ={
        keepAlive: 1,
        autoReconnect: true,
        poolSize: 10,
        userNewUrlParser: true,
        useUnifiedTopology: true,
    };
    return mongoose.connect(DB_CONNECTION_URL, option);
}

export default connectDB;