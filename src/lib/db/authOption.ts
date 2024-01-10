import GoogleProvider from 'next-auth/providers/google';
import { prisma } from "@/lib/db/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import { Adapter } from "next-auth/adapters";
  
  export const authOption :NextAuthOptions ={
  adapter:PrismaAdapter(prisma) as Adapter,
  providers :[
 GoogleProvider({
  clientId : process.env.GOOGLE_CLIENT_ID as string,
  clientSecret : process.env.GOOGLE_CLIENT_SECRET as string
 })
  ]
}