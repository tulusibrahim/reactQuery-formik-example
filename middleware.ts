import { NextResponse, NextRequest } from "next/server"

export function middleware(req: NextRequest) {
    console.log('lewat middleware')
    let url: string = req.nextUrl.pathname
    let cookie: string | undefined = req.cookies.get('login')
    const response = NextResponse.next()

    console.log(url)
    if (cookie == undefined) {
        if (url == '/dashboard' || url == '/profile') {
            let tempUrl = req.nextUrl.clone()
            tempUrl.pathname = "/"
            return NextResponse.redirect(tempUrl)
        }
    }
    else if (cookie !== undefined) {
        if (url == '/') {
            console.log('home')
            let tempUrl = req.nextUrl.clone()
            tempUrl.pathname = "/dashboard"
            return NextResponse.redirect(tempUrl)
        }
    }

    // if (url.startsWith('/api')) {
    //     response.cookies.set('login', false, { expires: new Date(0) })
    // }
    // else {
    //     response.cookies.set('login', true, { httpOnly: true })
    // }
    // return response
}

export const config = {
    matcher: ['/', '/dashboard', '/profile', '/api/deletecookie'],
}