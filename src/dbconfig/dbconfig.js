import mongoose from "mongoose"
const username = process.env.NEXT_PUBLIC_USERNAME
const password = process.env.NEXT_PUBLIC_PASSWORD
const connectionSrt = "mongodb+srv://"+username+":"+password+"@cluster0.7xzzy5m.mongodb.net/sample_mflix?retryWrites=true&w=majority"
const connectDB = async() => {
    try {
        await mongoose.connect(connectionSrt,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log("suuccceess")
    } catch (error) {
        throw new Error("Faild conneciton")
        console.log("errorror")
    }
}
export default connectDB;