import dbConnect from "@/database/connection";
import User from "@/database/models/user.schema";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECREATE as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
   async signIn ({user}):Promise<boolean>{  // type script ma k retorn garxa vaner 
    try{
      await dbConnect()
      const existingUser =await User.findOne({email:user.email})// select * email from wrere email// data vaye obj dinxa xain vane empty obj dinxa find One le 
   if(!existingUser){
   await  User.create({
      username:user.name,
      email:user.email,
      profileImage:user.image||"C:\Users\Acer\Desktop\nextjsprojects\LMS system\lmssystem\public\person-icon-5.png"
      
    })
   }
   return true
   
    }catch(error)
    {
      console.log(error)
      return false
    }
   }
  }

  
});

export { handler as GET, handler as POST };
