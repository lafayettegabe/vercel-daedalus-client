import { NextResponse } from "next/server";

export async function GET(request: Request) {
    console.log('Request:', request);

    const { searchParams } = new URL(request.url);
    const name = searchParams.get('name');
    
    const message = `Hello ${name}, welcome to Daedalus Server!`;
    
    return NextResponse.json({ message });
}