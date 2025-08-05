import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          console.log("Authorizing user with credentials:", credentials);
          let user = null;

          // Check if credentials are provided
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Credentials are required.");
          }

          user = await prisma.user.findUnique({
            where: {
              email: credentials.email,
            },
          });

          if (!user || !user.hashedPassword) {
            // No user found, so this is their first attempt to login
            // Optionally, this is also the place you could do a user registration
            throw new Error("Invalid credentials.");
          }

          const isCorrectPassword = await bcrypt.compare(
            credentials.password,
            user.hashedPassword
          );

          if (!isCorrectPassword) {
            throw new Error("Invalid credentials.");
          }

          const { hashedPassword: ignoredPassword, ...userWithoutPassword } =
            user;

          // return user object with their profile data
          return userWithoutPassword;
        } catch (error) {
          console.error("Error during authorization:", error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id;
        token.email = user.email;
        token.name = user.name || user.email; // Fallback to email if name is not provided
        token.avatarUrl = user.avatarUrl || null; // Fallback to null if avatarUrl is not provided
        token.coverUrl = user.coverUrl || null; // Fallback to null if coverUrl is not provided
        token.pushToken = user.pushToken || null; // Fallback to null if pushToken is not provided
      }
      return token;
    },
    session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.user.name = token.name || token.email; // Fallback to email if name is
      session.user.avatarUrl = token.avatarUrl || null; // Fallback to null if avatarUrl is not provided
      session.user.coverUrl = token.coverUrl || null; // Fallback to null if coverUrl is not provided
      session.user.pushToken = token.pushToken || null; // Fallback to null if pushToken is not provided
      return session;
    },
  },
  pages: {
    signIn: "/auth",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  debug: process.env.NODE_ENV === "development",
  jwt: {
    secret: process.env.NEXTAUTH_JWT_SECRET,
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
});
