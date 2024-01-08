import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import connectDb from './utils/db-connection'
import { config } from 'dotenv'
import cors from 'cors'
// import {mergeSchemas,mergeResolvers} from 'graphql-tools'
import { makeExecutableSchema } from '@graphql-tools/schema'
import userSchema from './modules/user/interface/schema/schema'
import adminSchema from './modules/admin/interface/schema/schema'
import userResolver from './modules/user/interface/resolver/resolver'
import adminResolver from './modules/admin/interface/resolver/resolver'

const app = express()
app.use(cors())
config()

const dbLink: string = String(process.env.DB_LINK)
connectDb(dbLink)


const combinedSchema = makeExecutableSchema({
    typeDefs: [userSchema, adminSchema],
    resolvers: [userResolver, adminResolver]
})


app.use("/graphql",
    graphqlHTTP((req, res) => ({
        schema: combinedSchema,
        // rootValue:resolvers
        context: { token: req.headers.token }
    }))
)

app.listen(4000, () => console.log(`GraphQl server is running ..`))