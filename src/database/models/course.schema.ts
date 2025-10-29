// using mongoos odm 

import mongoose from "mongoose";
import Category from "./category.schema";
   const Schema =mongoose.Schema
     

   interface ICourse extends Document{
    title:string,
    desciption:string,
    price:number,
    duration :string,
    category :mongoose.Types.ObjectId,// like forian key
    lessons:mongoose.Types.ObjectId[],// multple hune bhayer array ma rakhne
    createdAt :Date
   }
   // calling schema controctor  for schema class
     const courseSchema = new Schema<ICourse>({
      title:{
        type:String,
      required:true},
      desciption:{
        type:String,
        required:true
      },
      price:{
        type:Number,
        required:true
      },
      duration:{
        type:String,
        required:true
      },
      category:{
        type:Schema.Types.ObjectId,// form reference or froian key
        ref:"Category"
      },
      lessons:[{
        type :Schema.Types.ObjectId,
        ref:"Lessions"
       
      }],
      createdAt:{
        type :Date,
        default:Date.now()
      }
       
     });

     const Course= mongoose.models.Course|| mongoose.model("Course",courseSchema)// table name + clomn name 
     export default Course 