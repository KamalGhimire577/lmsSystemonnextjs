// using mongoos odm

import mongoose from "mongoose";
const Schema = mongoose.Schema;

//  // calling schema controctor  for schema class
//    const userSchema = new Schema({
//      username: { type: String },
//      email:{type:String},
//      googleId:{type:String},
//      profileImage:{type:String}

//    });

enum Role {
  Student = "student",
  Admin = "admin",
}

interface IUser extends Document {
  username: string;
  profileImage: string;
  email: string;
  role: Role;
}
const userSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  // googleId:{type:String},
  profileImage: { type: String },
  role: {
    type: String,
    enum: [Role.Student, Role.Admin],
    default: Role.Student,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema); // table name + clomn name
export default User;
