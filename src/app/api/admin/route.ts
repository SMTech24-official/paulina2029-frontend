import { connectDB } from "@/lib/connectDB";

export async function POST(request: Request) {
  const admin = await request.json();
  try {
    const db = await connectDB();
    const adminCollection = await db.collection("admin");
    const isExist = await adminCollection.findOne({
      email: admin.email,
      password: admin.password,
    });
    if (isExist) {
      return Response.json({ status: 200, data: isExist });
    }
    return Response.json({
      status: 401,
      message: "Invalid Credential",
    });
  } catch (error) {
    return Response.json({
      message: error,
    });
  }
}

// GET - fetch all admins
// export async function GET() {
//   try {
//     const db = await connectDB();
//     const adminCollection = db.collection("admin");
//     const admins = await adminCollection.find().toArray();

//     return Response.json({ status: 200, data: admins });
//   } catch (error) {
//     return Response.json({
//       status: 500,
//       message: "Something went wrong",
//     });
//   }
// }
