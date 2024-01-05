import { Schema,model } from "mongoose";

const adminSchema = new Schema({
    id:String,
    password:String
})

const adminModel = model("admin",adminSchema)
export default adminModel