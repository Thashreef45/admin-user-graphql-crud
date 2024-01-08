import { compare } from "bcrypt";
import generateToken from "../../../utils/generate-token";
import repository from "../infrastructure/repository/repository";


const userLogin = async (_: any, { input }: { input: { id: string, password: string } } , context:any) => {
    const user = await repository.findUser(input.id)
    if (!user) {
        return {
            success: false,
            message: "User not found"
        };
    } else {
        if (user.password) {
            const checkPassword = await compare(input.password, user.password)
            if (checkPassword) {
                if(user.isBlocked){
                    return {
                        success: false,
                        message: "User have been blocked",
                    };
                }
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