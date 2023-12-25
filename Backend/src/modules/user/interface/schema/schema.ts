import { buildSchema } from "graphql";

let userSchema = buildSchema(`
    type Query {
        Hello: String
    }
    
    type Mutation {
        signUp(input: SignUpInput): String
        login(input: LoginInput): String
    }










    input SignUpInput {
        username: String!
        email: String!
        password: String!
    }

    input LoginInput {
    id: String!
    password: String!
  }
`);

export default userSchema;



// export const loginSchema = `
//   input LoginInput {
//     id: String!
//     password: String!
//   }
// `;
