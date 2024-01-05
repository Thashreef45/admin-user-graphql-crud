import adminLogin from "../../service/login"


const adminResolver = {
    Query: {
        adminHello: () => "Welcome Admin"
    },

    Mutation: {
        login: (_: unknown, { input }: { input: { id: string, password: string } }) => {
            adminLogin(input)
        },
    }


}

export default adminResolver