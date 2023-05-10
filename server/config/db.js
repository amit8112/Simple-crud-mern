import mongoose from "mongoose";


const connectToMongo = async () =>{
    try{
        const res = await mongoose.connect("mongodb://localhost:27017/crud-mern");
        if(res){
            console.log("Connected to MongoDB Database");
        }

        
    }catch (error){
            console.log(error);
    }
};

export default connectToMongo;