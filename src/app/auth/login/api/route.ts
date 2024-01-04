import { NextRequest, NextResponse } from "next/server";
import { loginFormSchema } from "@/app/lib/validations/LoginValidation";

export async function POST(request: NextRequest) {
    try {
        const { email, password } = loginFormSchema.parse(await request.json());
        console.log(email, password);
        return new NextResponse("It workds! 🎉")
    } catch (err: any) {
        console.log(err.message);
        return new NextResponse(err.message, { status: 400 });
    }
}