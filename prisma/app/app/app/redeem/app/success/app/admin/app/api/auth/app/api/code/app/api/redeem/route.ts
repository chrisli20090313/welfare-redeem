```tsx
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(req: Request) {
try {
const body = await req.json();
const {
email,
plan_selected,
recipient_name,
recipient_phone,
recipient_address,
verification_code,
} = body;
if (!email
