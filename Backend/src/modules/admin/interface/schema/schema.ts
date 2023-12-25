import { buildSchema } from "graphql"


let adminSchema = buildSchema(`
    type Query {
        adminHello:String
    }`)


export default adminSchema


