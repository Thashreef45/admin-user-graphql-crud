import userModel from "../schema/schema"

export default {
    findUser : async(id:string) => {
        return await userModel.findOne({id:id})
    },

    createUser : async(data:{id:string,password:string}) => {
        const newUser = new userModel({
            id : data.id,
            password : data.password
        })
        return await newUser.save()
    }
}