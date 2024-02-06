import mongoose from "mongoose"
export const connectdb =async()=>{
    try{
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"SneakerStroll",
        
        });
        console.log("Connected To MongoDB");
    }catch(error){
        consolelog("FAILED TO CONNECT");
        console.log(error);
    }
}