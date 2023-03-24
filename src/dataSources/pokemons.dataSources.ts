import PokemonRepository from "../core/repositories/pokemon.repository";
import fetch from "node-fetch"; 
import { Pokemon } from "../core/entities/Pokemon";

export default class pokemons implements PokemonRepository {

    public async getById(id: number): Promise<Pokemon> {
        const resp  = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
        method:'GET',

       
    })
    const data:any =await resp.json();
 
    return data
    }
   public async getPokemons(page: number, limit: number): Promise<Pokemon[]> {

    
    const offset=page*limit;
    const resp  = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`, {
        method:'GET',

       
    })
    const data:any =await resp.json();
   


    return data

    }
}