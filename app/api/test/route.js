// app/api/test/route.js
import { connectDB } from "../../../lib/connectDb";

export async function GET() {
  await connectDB(); 
  return Response.json({ message: "Connected to MongoDB " });
}
