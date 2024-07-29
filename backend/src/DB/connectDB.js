import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()
const connectDB=async()=>{
    try {
        await mongoose.connect("mongodb+srv://prasanna000019:abAMHP8v6ecFDCtH@cluster1.nlksp1m.mongodb.net/CodeDB?retryWrites=true&w=majority&appName=Cluster1")
        console.log("connected to mongo DB");
    } catch (error) {
        console.log("error conencting to MongoDB",error.message);
    }
}
export default connectDB;