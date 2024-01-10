import { authMiddleware } from "@clerk/nextjs";
import { pathToRegexp } from "path-to-regexp";

const userIdRoute = pathToRegexp("/api/user(.*)")
 
export default authMiddleware({
  publicRoutes: req => !req.url.includes('/dummy')
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 