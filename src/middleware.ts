import { authMiddleware } from '@clerk/nextjs';

export default authMiddleware({
  afterAuth: (auth, req, evt) => {
    // prisma query to create this user if it doesn't exist
    console.log(auth.user);
  },
  publicRoutes: ['/'],
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
