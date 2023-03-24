import { Res, User } from "../entities/User";
import UserRepository from "../repositories/user.repository";
import TokenRepository from '../repositories/token.repository';


 const loginUser =(userRepository:UserRepository,tokenRepository:TokenRepository)=>async(nickname:string,password:string):Promise<Res>=>{

    
        
             //Login User
             const userLogin:Boolean= await userRepository.loginUser(nickname,password)
            
             if (userLogin) {
                 //Generate token
                    const token:string = await tokenRepository.getByNickName(nickname)
                    //Retorna token
                return {ok:true, token}
             }
             
    

    return {ok:false, msg:'Usuario o contraseña incorrectos'}  
   

}



export default loginUser