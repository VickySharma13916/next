import { NextResponse } from "next/server";

export function middleware(request) {
  return NextResponse.redirect(new URL("/login", request.url));
  // if (request?.nextUrl?.pathname != "/login") {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
}

//for specific path redirection of the url use config URLs
export const config = {
  matcher: ["/about/aboutcollage/:path*"],
};
