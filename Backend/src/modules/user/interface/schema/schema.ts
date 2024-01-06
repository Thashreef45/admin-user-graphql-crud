import { buildSchema } from "graphql";

let userSchema = buildSchema(`
    type Query {
        Hello: String
        GetProfile:GetProfileRes
    }
    
    type Mutation {
        signUp(input: SignUpInput): SignUpResponse
        login(input: LoginInput): LoginResponse
        Hi(input: HiInput): HiResponse
        UserLogin(input: LoginInput): LoginResponse
    }




    input HiInput {
        name: String!
    }

    input SignUpInput {
        id: String!
        name : String!
        password: String!
    }

    type SignUpResponse {
        success: Boolean
        message: String
    }

    type LoginResponse {
        success: Boolean
        message: String
        token : String
    }

    input LoginInput {
        id: String!
        password: String!
    }


    type HiResponse {
        success: Boolean
        message: String
    }

    type GetProfileRes {
        name : String
        success: Boolean
        message: String
    }
`);

export default userSchema;

