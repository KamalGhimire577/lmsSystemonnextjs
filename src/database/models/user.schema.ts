// using mongoos odm 

import mongoose from "mongoose";
   const Schema =mongoose.Schema
   
   // calling schema controctor  for schema class
     const userSchema = new Schema({
       username: { type: String },
       email:{type:String},
       googleId:{type:String},
       profileImage:{type:String}

     });

     const User= mongoose.model("User",userSchema)// table name + clomn name 
     export default User 