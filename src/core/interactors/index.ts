import jwt from "../../dataSources/jwt.dataSources";
import pokemons from "../../dataSources/pokemons.dataSources";
import UserMongo from "../../dataSources/userMongo.dataSources";
import { LoadData, LoadDatabyid } from "./loadData.interactor";

import loginUserInteractor from "./loginUser.interactor";
import registerUser from "./registerUser.interactor";


const userRepository = new UserMongo();
const tokenRepository= new jwt();
const pokemonRepository = new pokemons();

export const loginInteractor = loginUserInteractor(userRepository,tokenRepository)


export const RegisterInteractor= registerUser(userRepository,tokenRepository)
export const LoadDataInteractor = LoadData(pokemonRepository)
export const LoadDatabyidInteractor = LoadDatabyid(pokemonRepository)