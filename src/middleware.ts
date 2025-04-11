import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware() {
  const response = NextResponse.next();
  response.headers.set('x-request-timestamp', Date.now().toString());

  return response;
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/',
};
