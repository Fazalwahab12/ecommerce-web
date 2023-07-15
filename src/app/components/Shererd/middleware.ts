import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    publicRoutes: ["/", "/product" ,"/Female", "/Male", "/kids",   "/studio/:path*"],
  })

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)",
    "/",
    
    "/product/:path*,/studio/:path*",
    "/(api|trpc)(.*)",
  ],
};