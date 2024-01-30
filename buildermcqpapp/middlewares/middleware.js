import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
export function middleware(request){
    const currentUser = request.cookies.get('currentUser')?.value
    if(currentUser){
        return NextResponse.redirect(new URL('/admin/dashboard',request.url))
    }
    return NextResponse.redirect(new URL('/admin',request.url))
}

export const config = {
    matcher:[]
}