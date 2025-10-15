// using mongoos odm 

import mongoose from "mongoose";
   const Schema =mongoose.Schema
   
   // calling schema controctor  for schema class
     const courseSchema = new Schema({
       courseName: { type: String },

       courseDiscription: { type: String },
       coursePrice: { type: Number },
       profileDuration: { type: String }
     });

     const Course= mongoose.model("Courses",courseSchema)// table name + clomn name 
     export default Course 