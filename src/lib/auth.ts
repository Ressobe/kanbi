import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { compare } from "bcrypt";
import db from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/sign-in',
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        const existingUser = await db.user.findUnique({
          where: { email: credentials?.email}
        })
        if (!existingUser) { return null; }
        
        const passwordMatched = await compare(credentials.password, existingUser.password);

        if (!passwordMatched) { return null; }

        return {
          id: `${existingUser.id}` ,
          username: existingUser.username,
          email: existingUser.email,
        }

      }
    })
  ],
  callbacks: {
    async jwt({ token, user}) {
      if (user) {
        return {
          ...token,
          username: user.username,
        }
      }
      return token;
    },
    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.username,
        }
      }
    },
  }
}