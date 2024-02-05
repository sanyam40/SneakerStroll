import mongoose from "mongoose"
export const connectdb =async()=>{
    try{
        const {connection}=await mongoose.connect(process.env.MONGO_DB_URL,{
            dbName:"SneakerStroll",
        
        });
        console.log("CONNECTED TO MONGODB");
    }catch(error){
        consolelog("FAILED TO CONNECT");
        console.log(error);
    }
}