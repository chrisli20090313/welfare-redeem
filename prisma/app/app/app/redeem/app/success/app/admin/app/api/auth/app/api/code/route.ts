```tsx
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();
export async function POST(req: Request) {
try {
const { email } = await req.json();
if (!email) return NextResponse.json ({ error: "请输入邮箱" }, { status: 400 });
const code = Math.floor(100000 + Math.random() * 900000).toString();
const expireMinutes = Number(process.env.CODE_EXPIRE_MINUTES
