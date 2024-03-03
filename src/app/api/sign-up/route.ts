import prisma from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { signUpSchema } from "@/app/types/formTypes";


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, username, password } = signUpSchema.parse(body);

    const isEmailInDatabase = await prisma.user.findUnique({
      where: { email: email }
    });

    if (isEmailInDatabase) {
      return NextResponse.json(
        {
          errors: { email: "User with this email already exist" },
        },
        { status: 409 }
      );
    }

    const isUserNameInDatabase = await prisma.user.findUnique({
      where: { username: username }
    });

    if (isUserNameInDatabase) {
      return NextResponse.json(
        {
          errors: { username: "User with this username already exist" },
        },
        { status: 409 }
      )
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        boards: {
          create: {
            title: "default",
            columns: {
              create: [
                { title: "Backlog" },
                { title: "To do" },
                { title: "In Progress" },
                { title: "Done" }
              ]
            }
          }
        }
      },
    });


    return NextResponse.json({ user: newUser, message: "User created successful" }, { status: 201 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Something went wrong!" }, { status: 500 });
  }
}
