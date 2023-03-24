import { Pokemon } from "../entities/Pokemon";


export default interface PokemonRepository {

    getById(id:number):Promise<Pokemon>;
    getPokemons(page:number,limit:number):Promise<Array<Pokemon>>;




}