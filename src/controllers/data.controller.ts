import { Request, Response } from 'express';
import { LoadDatabyidInteractor, LoadDataInteractor } from '../core/interactors/index';



export const getPokemons = async (request:Request,response:Response) => {
       const {page,limit}:number|any= request.query
    try {
         
        
        const res = await LoadDataInteractor(parseInt(page),parseInt(limit));
        if (res.ok) {
            response.status(200).json(res)
        }else{
            response.status(500).json(res)}
        
    } catch (error) {
        console.log(error);
        response.status(500).json({
            ok:false,
            msg:'hable con el administrador'
        })
    }

}
export const getPokemonbyid = async (request:Request,response:Response) => {
  const {id}:number | any = request.params
try {
     

    const res = await LoadDatabyidInteractor(id);
    if (res.ok) {
        response.status(200).json(res)
    }else{
        response.status(500).json(res)}
    
} catch (error) {
    console.log(error);
    response.status(500).json({
        ok:false,
        msg:'hable con el administrador'
    })
}

}