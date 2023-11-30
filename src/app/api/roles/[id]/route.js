// react/next stuff
import { NextResponse } from "next/server";

// stuff for data
import connectToDB from "@/utils/db";
import Role from "@/models/Role";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDB();

        const role = await Role.findById(id);

        return new NextResponse(JSON.stringify(role), { status: 200 });
    } catch (err) {
        return new NextResponse("Database Error", { status: 500 });
    }
};


export const PUT = async (request, { params }) => {
    const { id } = params;
    const body = await request.json();

    try {
        await connectToDB();
        await Role.findByIdAndUpdate(id, body);
        return NextResponse.json({ message: "Role updated" }, { status: 200 });
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}