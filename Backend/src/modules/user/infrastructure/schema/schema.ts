import { Schema,model } from "mongoose";

const userSchema = new Schema({
    id:String,
    password:String
})

const userModel = model("user",userSchema)
export default userModel