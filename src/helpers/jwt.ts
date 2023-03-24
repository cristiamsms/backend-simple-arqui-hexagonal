import jwt from 'jsonwebtoken';

export const generarJWT = ( nickname:string ):Promise<string> => {

    return new Promise( (resolve, reject) => {

        const payload = { nickname };

        jwt.sign( payload, process.env.SECRET_JWT_SEED || 'rocketfy', {
            expiresIn: '1h'
        }, (err:string|any, token:string | any ) => {

            if ( err ){
                console.log(err);
                reject('No se pudo generar el token');
            }

            resolve( token );

        })


    })
}



