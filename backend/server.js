import express from "express"
import cors from "cors"
// import 'dotenv/config' 
import dotenv from "dotenv"
dotenv.config();
import authRoutes from "./src/routes/AuthRoutes.js";
import problemRoute from './src/routes/ProblemRoutes.js'
import userSubmissionRoute from './src/routes/UserSubmissionRoute.js'
import connectDB from "./src/DB/connectDB.js";
const app=express();
const port =process.env.PORT|| 4000;
connectDB();
//middlewares
app.use(express.json());
app.use(cors())     //connect frontend to backend
app.use('/api/auth',authRoutes);
app.use('/api/problems',problemRoute);
app.use('/api/submit',userSubmissionRoute);
//initialising routes
app.get('/',(req,res)=>{
    res.send("api working bro")
})
app.listen(port,()=>{
    console.log(`server started on ${port}`);
})