import { User } from "../entities/User";

export default interface TokenRepository {
    getByNickName(username:string):Promise<string>;
    
}