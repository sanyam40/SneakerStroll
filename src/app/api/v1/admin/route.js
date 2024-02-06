import { NextResponse } from "next/server";

export async function GET(){
    try {
        return NextResponse.json({message: "Hello from admin route"});
    } catch (error) {
        return NextResponse.error({message: error.message});
    }
}