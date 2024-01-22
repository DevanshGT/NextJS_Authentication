import mongoose, { Mongoose, connect } from "mongoose";
import connectDB from "../../../../dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Users from "../../../../models/userModel";
import { NextRequest } from "next/server";
import bcrypt, { hash } from "bcrypt";
import { randomBytes } from "crypto";
import { ObjectId } from "bson";
export async function GET() {
    try {
        const response = NextResponse.json({
            message:"Login Successfully",
            success:true
        })
        response.cookies.set("token_made","",
        {
            httpOnly:true,
        })
        return response
    } catch (error) {
        const response = NextResponse.json({
            message:"Error in logout",
            success:false
        })
        return response
    }
}