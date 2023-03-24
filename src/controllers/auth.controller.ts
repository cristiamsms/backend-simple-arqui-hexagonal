import { Request, Response } from "express";
import { loginInteractor, RegisterInteractor } from "../core/interactors";
import { generarJWT } from "../helpers/jwt";




export const registerUsers = async (request:Request,response:Response) => {
    
    try {
         
    
        const res = await RegisterInteractor(request.body);
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
export const loginUsers = async (request:Request,response:Response) => {
    const {nickname,password} = request.body
    try {
         
    
        const res = await loginInteractor(nickname,password);
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

export const revalidarToken = async (req:Request, res:Response) => {



    
    // Generar JWT
    const token = await generarJWT( req.body.uid);

    res.status(200).json({
        ok: true,   
        token
    })
}