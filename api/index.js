import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';//we cannot use .env variabe inside a package so install dotenv library and .env file is ignored while pushing on github
import userRouter from './routes/user.route.js';
dotenv.config();

mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MongoDb');
}).catch((err)=>{
    console.log(err);
})

// const PORT=env.listen.process || 3000;

const app = express();

app.listen(3000,()=>{
    console.log('server is running on port 3000!');
})

app.use("/api/user",userRouter)