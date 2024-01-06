import repository from "../infrastructure/repository/repository"
import verifyToken from "../interface/middleware/middleware"


const getUserProfile = async (_: any, __: any, context: { token: string }) => {
    const user = verifyToken(context.token)
    let userData
    if (typeof user == 'object') {
        if(!user) return user
        userData = await repository.findUser(user?.id)
    }
    console.log(userData,'ddata')

    if (userData) {
        return {
            name: userData.id,
            message: "Profile found",
            success: true
        }
    } else {
        return {
            message: "Profile not found", success: false
        }
    }
}

export default getUserProfile