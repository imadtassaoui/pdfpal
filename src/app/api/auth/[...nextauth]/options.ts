import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        //db users
        const user = {
          id: "1337",
          email: "imadetassaoui@gmail.com",
          passwprd: "123456",
        };

        if (
          credentials?.email === user.email &&
          credentials?.password === user.passwprd
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  //   pages: {
  //     signIn: "/signin"
  //   }
};
