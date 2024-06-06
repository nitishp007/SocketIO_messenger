import express from 'express';
import configureExpressApp from './expressConfig/index.js';
import connectDB from './dbConnection/index.js';
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import userRoutes from './routes/userRoutes.js';

const secretKeyJWT = "ananananananananana";
const PORT = 4000;


const app = express();
configureExpressApp(app);

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use('/api/user',userRoutes);



const startServer = () => {
    Promise.all([connectDB()]).then(()=>{
        app.listen(PORT);
        console.log(`Server has stared on port ${PORT}`);
    })
}

startServer();

