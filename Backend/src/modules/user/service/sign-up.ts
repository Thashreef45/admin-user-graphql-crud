import { hash } from 'bcrypt'
import repository from "../infrastructure/repository/repository"


const userSignUp = async (_: any, { input }: { input: { name: string, id: string, password: string } }) => {
    let alreadyExist = await repository.findUser(input.id)
    if (alreadyExist) {
        return {
            success: false,
            message: "User already exists"
        }
    } else {

        //hashing password 
        input.password = String(await hash(input.password, 10))

        let created = await repository.createUser(input)
        if (created) {
            return {
                success: true,
                message: "User registered successfully"
            }
        } else {
            return {
                success: false,
                message: "Failed to register user"
            }
        }
    }
}

export default userSignUp