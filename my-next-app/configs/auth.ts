import type { AuthOptions } from 'next-auth'
import Google from 'next-auth/providers/google'

export const authConfig: AuthOptions = {
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ]
}
