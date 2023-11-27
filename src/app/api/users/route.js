// react/next stuff
import { NextResponse } from "next/server";

// stuff for data
import connectToDB from "@/utils/db";
import User from "@/models/User";

export const GET = async (request) => {
    //fetch
    try {
        await connectToDB();

        const users = await User.find();

        return new NextResponse(JSON.stringify(users), { status: 200 });

    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}

export const POST = async (request) => {
    const body = await request.json();

    const newUser = new User(body);

    //fetch
    try {
        await connectToDB();

        await newUser.save();

        return new NextResponse('User has been created', { status: 201 });

    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}