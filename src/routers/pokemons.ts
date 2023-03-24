import { Router } from 'express';

import { getPokemons, getPokemonbyid } from '../controllers/data.controller';
import { validarJWT } from '../middlewares/validar-jwt';



const router = Router();


router.get('/',validarJWT,  getPokemons );
router.get('/:id', validarJWT, getPokemonbyid );


export default router;