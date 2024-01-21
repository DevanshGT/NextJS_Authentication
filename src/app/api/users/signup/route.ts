import mongoose, { Mongoose, connect } from "mongoose";
// import connectDB from "../../../../dbconfig/dbconfig";
// import { NextResponse } from "next/server";
// import Users from "../../../../models/userModel";
import connectDB from "../../../../dbconfig/dbconfig";
import { NextResponse } from "next/server";
import Users from "../../../../models/userModel";
import { NextRequest } from "next/server";
import bcrypt, { hash } from "bcrypt";
import { randomBytes } from "crypto";
import { ObjectId } from "bson";
export async function GET(request: NextRequest) {
    try {
        await connectDB();
        const data = await Users.find().sort({ "_id": -1 }).limit(10)
        console.log("connected to db");
        return NextResponse.json(data)
    } catch (error) {
        console.log("connected to faild db");
        return NextResponse.json({ "data": false })
    }
}

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const reqBody = await request.json()
        // return NextResponse.json({msg:reqBody})
        const {username, email, password} = reqBody
        const name = username
        const data = await Users.findOne({email})
        if(data){
            return NextResponse.json({"Empty":"User Exists"})
        } else {
            // password Hashing
            const salt = await bcrypt.genSalt(10)
            const hashPassword = await bcrypt.hash(password, salt)
            const text = hashPassword
            var movie_id = new ObjectId();
            const newUser = new Users({
                name,
                email,
                text,
                movie_id
            })
            const savedUser = await newUser.save()
            return NextResponse.json({"msg":"success"})
        }
    } catch (error) {
        console.log("connected to faild db ",error);
        return NextResponse.json({ "data": false })
    }
}