// react/next stuff
import { NextResponse } from "next/server";

// stuff for data
import connectToDB from "@/utils/db";
import User from "@/models/User";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();

        const user = await User.findById(id);

        return new NextResponse(JSON.stringify(user), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};

export const PUT = async (request, { params }) => {
    const { id } = params;
    const body = await request.json();

    try {
        await connectToDB();
        await User.findByIdAndUpdate(id, body);
        return NextResponse.json({ message: "User updated" }, { status: 200 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}