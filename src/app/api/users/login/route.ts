import mongoose, { Mongoose, connect } from "mongoose";
import connectDB from "../../../../dbconfig/dbconfig";
import Users from "../../../../models/userModel";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import bcrypt, { hash } from "bcrypt";
import getConfig from "next/config";


// import { ObjectId } from "bson";
// import { ObjectId } from "mongoose";
export async function POST(request: NextRequest) {
    const serverRuntimeConfig  = 'fdsf7&^$^&%rfur654&^%$R^&$67r54^&g&*$Ff5';
    try {
        await connectDB();
        const reqBody = await request.json()
        // return NextResponse.json({msg:reqBody})
        const {username, email, password} = reqBody
        const name = username
        const data = await Users.findOne({email})
        if(!data){
            return NextResponse.json({"Empty":"User Does not Exists"})
        }
        console.log(data)
        var id = data?.text ? data?.text : ''
        const validPass = await bcrypt.compare(password,id) 
        if(!validPass){
            return NextResponse.json({"Empty":'Password is Incorrect'})
        }
        // Creating token 
        const jwt = require('jsonwebtoken');
        const secret = data._id;
        const tokenData = {
            id: data._id,
            username: data.name,
            email: data.email
        }
        const token = await jwt.sign(
            tokenData, 
            serverRuntimeConfig,
            {expiresIn: "1min"}
        )
        // // setting cookie
        const response = NextResponse.json({
            message:"Login Successfully",
            success:true
        })
        response.cookies.set("token_made",token,
        {
            httpOnly:true,
        })
        return response
        return NextResponse.json({"success":'yokoso'})
    } catch (error) {
        console.log("connected to faild db ",error);
        return NextResponse.json({ "data": false })
    }
}