import NextAuth from "next-auth";
import GoogleProveder from "next-auth/providers/google"
  const handler=NextAuth({
providers:[
  GoogleProveder({
    clientId:process.env.GOOGLE_CLIENT_ID as string,
    clientSecret:process.env.GOOGLE_CLIENT_SECREATE as string
  }

  )

],
secret:process.env.NEXTAUTH_SECRET
})

export{handler as GET } // mathi pani milxa 