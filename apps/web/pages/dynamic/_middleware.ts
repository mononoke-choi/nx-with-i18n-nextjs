import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const random = Math.floor(Math.random() * 10) % 2;
  const url = req.nextUrl.clone();

  if (url.pathname.endsWith('/dynamic')) {
    return NextResponse.redirect(`${url.href}${random ? '/cat' : '/dog'}`, 308);
  }
}
