import dbConnect from "@/database/connection";

export async function GET (){
  dbConnect()
  return Response.json({
    message:"you hit the api route "
  })
}