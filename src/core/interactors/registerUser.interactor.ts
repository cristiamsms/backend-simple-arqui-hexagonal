
import { Res, User } from "../entities/User";
import UserRepository from "../repositories/user.repository";
import TokenRepository from '../repositories/token.repository';


export const registerUser =(userRepository:UserRepository,tokenRepository:TokenRepository)=>async(user:User):Promise<Res>=>{

    //Get user by nickName  
    const users:User= await userRepository.getByNickName(user.nickname)

    if (users) {
        
        return {ok:false, msg:'ya existe este usuario con este nickname'}

    } else {
            //Create User
        const userCreated:Boolean= await userRepository.createUser(user)
    if (userCreated) {
        
        //Generate token
        const token:string = await tokenRepository.getByNickName(user.nickname)
        //Retorna token
        return {ok:true, token}
    }
     return {ok:false, msg:'error'}
    }

    
   

}

export default registerUser