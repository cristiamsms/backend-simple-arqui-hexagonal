import { User } from '../core/entities/User';
import UserRepository from '../core/repositories/user.repository';
import { Users } from '../db/models/user';
import bcrypt from 'bcryptjs';
export default class UserMongo implements UserRepository {

    public async getByNickName(nickname: String): Promise<User> {
        const userFind:User | any= await Users.findOne({nickname});
     
        return userFind;
    }
    public async createUser(user: User): Promise<Boolean> {
        
        try {
            
            const newUser= new Users(user);
        
            newUser.last_connection=new Date();
            // Encriptar contraseña
            const salt = bcrypt.genSaltSync();
            newUser.password = bcrypt.hashSync(  newUser.password, salt );
            await newUser.save();
            return true

        } catch (error) {
            
            console.log(error)
           
            return false
        }

    }
    public async loginUser(nickname: string, password: string): Promise<Boolean> {

        const userFind:User | any= await Users.findOne({nickname});
      
        if (userFind) {
            // Confirmar los passwords
            const validPassword = bcrypt.compareSync( password, userFind.password );
            if (validPassword) {
                await Users.findByIdAndUpdate(userFind._id,{last_connection:new Date()})
                 return true
            }
 
        }
           
        return false   
    }
    
}