import getUserProfile from "../../service/get-profile";
import userLogin from "../../service/login";
import userSignUp from "../../service/sign-up";
// import verifyToken from "../middleware/middleware";

const userResolver = {
  Query: {
    GetProfile:getUserProfile,
  },

  Mutation: {
    signUp:userSignUp,
    UserLogin: userLogin,

    login: async (_: any, { input }: { input: {id:string,password:string} }) => {
      //
    }
  }
};

export default userResolver;


// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlRoYXNocmVlZiIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA0NTIyMDA2fQ.--VBrwSNARdI1unhFAOWXFy4WWBwid9xb-SEFB_ZGHM