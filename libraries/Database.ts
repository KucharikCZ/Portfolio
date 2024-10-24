import mongoose from "mongoose";

export async function connectDatabase(){
    if(mongoose.connection.readyState === 0){
        try{
            await mongoose.connect(process.env.MONGO_URL || "");
            console.log("[LOG][SUCCESS] Připojeno k databázovému serveru!");
        }catch(e){
            console.log("[LOG][ERROR] Nepodařilo se připojit k databázovému serveru!");
            console.error(e);
        }
    }
}