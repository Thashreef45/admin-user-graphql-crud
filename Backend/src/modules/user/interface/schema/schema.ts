import { buildSchema } from "graphql";

let userSchema = buildSchema(`
    type Query {
        GetProfile:GetProfileRes
    }
    
    type Mutation {
        signUp(input: SignUpInput): SignUpResponse
        UserLogin(input: LoginInput): LoginResponse
        login(input: LoginInput): LoginResponse
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

    type GetProfileRes {
        name : String
        success: Boolean
        message: String
    }
`);

export default userSchema;

