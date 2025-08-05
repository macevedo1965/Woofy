import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log(body);

    const userFound = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
    });

    if (userFound) {
      console.log("userFound", userFound);
      return NextResponse.json(
        { message: "Email del humano ya existe" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    console.log("hashedPassword", hashedPassword);

    const newUser = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        hashedPassword: hashedPassword,
      },
    });

    console.log("newUser", newUser);
    // Exclude the password from the response
    const { password: ignoredPassword, ...user } = newUser;
    console.log("user", user);
    return NextResponse.json({ data: user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Error al registrar usuario", message: error.message },
      { status: 422 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
