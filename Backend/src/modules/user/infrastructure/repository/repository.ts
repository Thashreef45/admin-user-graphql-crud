import userModel from "../schema/schema"

export default {
    findUser: async (id: string) => {
        return await userModel.findOne({ id: id })
    },

    createUser: async (data: { id: string, name: string, password: string }) => {
        console.log(data, 'repo@@@')
        const newUser = new userModel({
            id: data.id,
            name: data.name,
            password: data.password
        })
        return await newUser.save()
    }
}