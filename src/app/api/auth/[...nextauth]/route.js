import { CredentialsProvider } from "next-auth/providers/credentials";
// import { signIn } from "next-auth/react"
import NextAuth from "next-auth";
import bcrypt from 'bcrypt';
// import NextAuthOp
const handler = NextAuth({
    pages: {
        signIn: "/form/login"
    },  
    providers: [
        CredentialsProvider({
            name: "credentials",
            Credentials: {},
            async authorize(credentials) {
                try {
                    console.log({ credentials });
                } catch (error) {
                    console.log("EERROORR ", error)
                    return null
                }
            }
        }),
    ]
})
//  const authOptions = {
//     // This are the pages where user can navigate in case they are not logged in.
//     pages: {
//         signIn: "/form/login"
//     },  
//     providers: [
//         CredentialsProvider({
//             name: "credentials",
//             Credentials: {},
//             async authorize(credentials) {
//                 try {
//                     console.log({ credentials });
//                 } catch (error) {
//                     console.log("EERROORR ", error)
//                     return null
//                 }
//             }
//         }),
//     ],
//     session: {
//         strategy: "jwt",
//     },
//     secret: process.env.NEXTAUTH_SECRET
// }

// const handler = NextAuth(authOptions)
export {handler as GET, handler as POST}
