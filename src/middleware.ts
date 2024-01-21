import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import path from 'path'
// This function is our logic part
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPublicPath = path === '/form/login' || path === '/form/signup'
    const userToken = request.cookies.get('token_made')?.value ? request.cookies.get('token_made')?.value :  ''
    if(userToken && isPublicPath){
        return NextResponse.redirect(new URL('/form/home', request.url))
    }
    if(!userToken && !isPublicPath){
        return NextResponse.redirect(new URL('/form/login', request.url))
    }
    // return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
    matcher: [
        '/',
        '/form/home',
        '/form/login',
        '/form/signup',
    ]
}