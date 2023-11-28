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

export const PUT = async (request) => {
    const { _id } = request.query;
    const body = await request.json();

    try {
        await connectToDB();

        const updatedRole = await Role.findByIdAndUpdate(_id, body, { new: true });

        if (!updatedRole) {
            return new NextResponse('Role not found', { status: 404 });
        }

        return new NextResponse('Role has been updated', { status: 200 });

    } catch (error) {
        return new NextResponse('Database Error', { status: 500 });
    }
}