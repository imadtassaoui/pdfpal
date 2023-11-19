import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, name, password } = body;
  console.log(email, name, password);

  if (!email || !name || !password)
    return new NextResponse("Missing fields", { status: 400 });

  const userExists = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (userExists)
    return new NextResponse("User already exists", { status: 400 });

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
