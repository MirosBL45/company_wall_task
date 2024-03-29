// react/next stuff
import { NextResponse } from "next/server";

// stuff for data
import connectToDB from "@/utils/db";
import Role from "@/models/Role";

export const GET = async (request) => {
    //fetch
    try {
        await connectToDB();

        const roles = await Role.find();

        return new NextResponse(JSON.stringify(roles), { status: 200 });

    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}

export const POST = async (request) => {
    const body = await request.json();

    const newRole = new Role(body);

    //fetch
    try {
        await connectToDB();

        await newRole.save();

        return new NextResponse('Role has been created', { status: 201 });

    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}