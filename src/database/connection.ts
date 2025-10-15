import mongoose from "mongoose";

const mongodb_cs = process.env.MONGODB_CS

if (!mongodb_cs){
  throw new Error ("please provide mongoodncs")
}
//else

  const dbConnect=async()=>{
    try{
      await mongoose.connect(mongodb_cs)
    }
    catch(error){
      console.log("Error connecting .. ",error)
    }
  
  }

  export default dbConnect