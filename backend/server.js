import APP from 'express';

const app =new APP();
const PORT = 4000;

constServer = () => {
    Promise.all([connectDB()]).then(()=>{
        app.listen(PORT);
        console.log(`Server stared on port ${PORT}`);
    })
}

startServer();