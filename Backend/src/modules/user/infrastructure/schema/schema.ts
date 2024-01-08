import { Schema,model } from "mongoose";

const userSchema = new Schema({
    id:String,
    name: String,
    password:String,
    isBlocked:{
        type : Boolean,
        default : false
    }
})

const userModel = model("user",userSchema)
export default userModel