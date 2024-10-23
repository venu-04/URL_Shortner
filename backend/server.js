import express from 'express';
import cors from 'cors';
import connect from './config/db.js';

connect();
const app=express();
app.use(cors());
app.use(express.json());

// app.get("/",(req,res)=>{
//     res.send("Hello World");
//     console.log("Hello world");
    
// });
import urlRoutes from '../backend/routes/urlRoutes.js';
app.use('/url/',urlRoutes);

app.listen("4000",()=>{
    console.log("server is running in port 4000");
    
});
