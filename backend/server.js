import express from 'express';
import configureExpressApp from './expressConfig/index.js';
import connectDB from './dbConnection/index.js';
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";

const secretKeyJWT = "ananananananananana";
const PORT = 4000;


const app = express();
configureExpressApp(app);
const server = createServer(app);


const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const startServer = () => {
    Promise.all([connectDB()]).then(()=>{
        server.listen(PORT);
        console.log(`Server has stared on port ${PORT}`);
    })
}

startServer();

