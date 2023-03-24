import { Res, User } from "../entities/User";
import UserRepository from "../repositories/user.repository";
import TokenRepository from '../repositories/token.repository';
import PokemonRepository from "../repositories/pokemon.repository";
import { Pokemon } from "../entities/Pokemon";


export const LoadData =(pokemonRepository:PokemonRepository)=>async(page:number,limit:number):Promise<Res>=> {

        //Get data
        const data:Array<Pokemon> = await pokemonRepository.getPokemons(page,limit)
        //Return data
        return {
            ok:true,
            data
        }
    
   

}



export const LoadDatabyid =(pokemonRepository:PokemonRepository)=>async(id:number):Promise<Res>=> {

    //Get data
    const data:Pokemon = await pokemonRepository.getById(id)
    //Return data
    return {
        ok:true,
        data
    }



}
