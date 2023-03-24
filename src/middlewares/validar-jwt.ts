import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const validarJWT = ( req:Request, res : Response, next:any ) => {

    // x-token headers
    const token = req.header('x-token');

    if ( !token ) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { nickname } = jwt.verify(
            token,
            process.env.SECRET_JWT_SEED ||''
        ) as any ;
 
        req.body.nickname = nickname;
    


    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no válido'
        }); 
    }



    next();
}


