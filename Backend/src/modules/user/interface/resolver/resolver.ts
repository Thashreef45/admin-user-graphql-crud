import userLogin from "../../service/login"
import userSignUp from "../../service/sign-up"

const userResolver = {
    Query: {
        Hello: () => "Hey Thashreef",
        // profile:()=>
    },
    Mutation : {
        signUp : (_:unknown,{input}:{input:any})=>{
            userSignUp(input)
        },
        login : (_:unknown,{input}:{input:{id:string,password:string}})=>{
            userLogin(input)
        },
    }
}

export default userResolver