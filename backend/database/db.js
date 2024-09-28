import mongoose from "mongoose";
const connectDB = async() => {
await mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("MongoDB Connnected Successfully");
}).catch(()=>{
    console.log('MongoDb Crashed');
})
};
export default connectDB;