import { compare } from "bcrypt";
import generateToken from "../../../utils/generate-token";
import userModel from "../infrastructure/schema/schema"
import verifyToken from "../interface/middleware/middleware";


const userLogin = async (_: any, { input }: { input: { id: string, password: string } } , context:any) => {
    let hi = verifyToken(context.token)
    console.log('userlogn reached',context.token,'context',hi)
    const user = await userModel.findOne({ id: input.id })
    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    } else {
        if (user.password) {
            const checkPassword = await compare(input.password, user.password)
            if (checkPassword) {
                return {
                    success: true,
                    message: "Login success",
                    token: generateToken({id:input.id,role:"user"})
                };
            } else {
                return {
                    success: false,
                    message: "Incorrect Password"
                };
            }
        }
    }
}

export default userLogin