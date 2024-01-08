import { config } from 'dotenv'
import {sign} from 'jsonwebtoken'
config()


const generateToken = (data:{id:string,role:string}) => {
    return sign(data,String(process.env.JWT_SIGNATURE))
    
}


export default generateToken

