import { User } from "../entities/User";

export default interface UserRepository {
    getByNickName(username:string):Promise<User >;
    createUser(user:User):Promise<Boolean>;
    loginUser(nickname:string,password:string):Promise<Boolean>;
}

