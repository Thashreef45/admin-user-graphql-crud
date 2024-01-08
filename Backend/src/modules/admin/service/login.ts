import repository from "../infrastructure/repository/repository"

const adminLogin = async (data:{id:string,password:string})=>{
    const adminExist = await repository.findAdmin(data.id)
    if(adminExist){

    }else{
        
    }
}


export default adminLogin