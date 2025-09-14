import mongoose  from "mongoose"
import {DATABASE_NAME} from "../constant.js"


export const connectDB=async()=>{
    
    try {
        const response =await mongoose.connect(`mongodb+srv://food:mast@cluster0.bakvqhl.mongodb.net/${DATABASE_NAME}`)
        console.log(`db connected:  ${response.connection.host}`)
        
    } catch (error) {
        console.log(`database connection eroor:${error.message}`)
        process.exit(1)
    }

}