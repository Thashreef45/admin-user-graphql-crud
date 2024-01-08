import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"

const verifyToken = (userToken:string) => {

    try {
        const token = String(userToken.split(" ")[1])
        if (!token) {
            return {
                success:false,
                message:"Token not found",
            }
        }
        let user = verify(token, String(process.env.JWT_SIGNATURE) )

        if(typeof user == 'object' && user.role != 'user'){
            return {
                success:false,
                message:"Forbidden",
            }
        }

        else return user
    }catch{
        return {
            success:false,
            message:"Unauthorized",
        }
    }

}

export default verifyToken