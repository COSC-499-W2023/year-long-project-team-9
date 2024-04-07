import { fetchAuthSession } from "aws-amplify/auth/server";
import { NextRequest, NextResponse } from "next/server";
import { runWithAmplifyServerContext } from "./app/utils/amplifyServerUtils";

export default async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const authenticated = await runWithAmplifyServerContext({
    nextServerContext: { request, response },
    operation: async (contextSpec) => {
      try {
        const session = await fetchAuthSession(contextSpec);
        return session.tokens !== undefined;
      } catch (error) {
        console.log(error);
        return false;
      }
    },
  });
  if (authenticated) {
    return response;
  } else {
    if (request.nextUrl.pathname === "/") {
      return response;
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - logo.svg (Obscurus logo)
     * - tailwindcss.svg (Tailwind logo)
     * - sst-icon-seeklogo.com.svg (SST logo)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|logo.svg|tailwindcss.svg|sst-icon-seeklogo.com.svg).*)",
  ],
};
