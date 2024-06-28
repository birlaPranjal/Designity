
const nextAuthConfig = {
        // Other NextAuth.js configurations...
        pages: {
            signIn: '/auth/signin',
            signOut: '/auth/signout',
            // Other pages...
        },
        // Other configurations...
        site: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    };

export default nextAuthConfig;
  