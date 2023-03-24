import TokenRepository from "../core/repositories/token.repository";
import { generarJWT } from "../helpers/jwt";

export default class jwt implements TokenRepository {

    public async getByNickName(username: string): Promise<string> {
            const token:string =await generarJWT(username)
        return token;
    }

}