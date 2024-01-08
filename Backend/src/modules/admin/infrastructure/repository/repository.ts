import adminModel from "../schema/schema";

export default {
    findAdmin : async (id:string) => {
        return await adminModel.findOne({id:id})
    },
}