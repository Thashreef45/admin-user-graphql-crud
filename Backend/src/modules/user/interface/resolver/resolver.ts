import userLogin from "../../service/login";
import userSignUp from "../../service/sign-up";
// import verifyToken from "../middleware/middleware";

const userResolver = {
  Query: {
    Hello: () => {
      console.log("---");
      return "Hey Thashreef";
    },
    // profile:()=>
  },

  Mutation: {
    signUp:userSignUp,

    login: async (_: any, { input }: { input: {id:string,password:string} }) => {
      //
    },

    UserLogin: userLogin,

    Hi: (_: any, { input }: { input: { name: string } }) => {
        console.log(`Hello, ${input.name}!`);
        return {success:true,message:`Hey, ${input.name}!`}
    }
  }
};

export default userResolver;
