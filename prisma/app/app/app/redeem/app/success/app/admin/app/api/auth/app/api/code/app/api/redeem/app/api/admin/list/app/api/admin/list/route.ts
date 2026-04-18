```tsx
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function GET(req: Request) {
const auth = req.headers.get("authorization");
if (auth !== "admin_logined") {
return NextResponse.json ({error: "未授权"}, { status: 401 });
}
const { searchParams } = new URL(req.url);
const plan = searchParams.get("plan")
