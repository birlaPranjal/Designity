import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";
import bcrypt from 'bcryptjs';
import dbConnect from './../../../lib/dbConnect';
import UserModel from '@/app/model/User';


export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                await dbConnect();
                try {
                    const user = await UserModel.findOne({ email: credentials.email });

                    if (user) {
                        // If the user exists, compare the password
                        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
                        if (!isValidPassword) {
                            throw new Error('Invalid email or password');
                        }
                        return user;
                    } else {
                        // If the user does not exist, create a new one
                        const hashedPassword = await bcrypt.hash(credentials.password, 10);
                        const newUser = await UserModel.create({
                            email: credentials.email,
                            password: hashedPassword,
                            isVerified: false, // You can set other initial user properties here
                        });
                        return newUser;
                    }
                } catch (err: any) {
                    throw new Error(err.message || 'Error during authorization');
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || '' ,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || '' 
        }),
        GitHubProvider({
            clientId: process.env.GIT_CLIENT_ID || '' ,
            clientSecret: process.env.GIT_SECRET || '',
          })
        
    ],
    
    callbacks: {
        async jwt({token, user}) {
            if (user) {
                token.id = user._id?.toString() ;
                token.isVerified = user.isVerified ;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username ;
            }
            return token;
        },
        async session({session, token}) {
            if(token){
                session.user._id = token.id as string;
                session.user.isVerified = token.isVerified as boolean;
                session.user.isAcceptingMessages = token.isAcceptingMessages as boolean;
                session.user.username = token.username as string;
            }
            return session;
        }
    },
    pages: {
        signIn: '/signin',
        signOut: '/signout',
        error: '/error',
        verifyRequest: '/verify-request',
        newUser: '/new-user'
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,


};
