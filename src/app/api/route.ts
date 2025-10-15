import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";

export async function GET() {
  await dbConnect(); // ✅ important
  console.log("API route hit"); // this should also appear in console
 await User.create({
  email:"ghimirekedar@gmail.com",
  googleId:"86687765876868",
  profileImage:"dummy image",
  username:"lakhan"
})
  return Response.json({
    message: "You hit the API route"
  });
}
