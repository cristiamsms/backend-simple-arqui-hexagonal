import { Router } from 'express';
import { loginUsers, registerUsers, revalidarToken } from '../controllers/auth.controller';
import { validarJWT } from '../middlewares/validar-jwt';



const router = Router();


router.post('/',   registerUsers );
router.post('/login',   loginUsers );
router.get('/renew', validarJWT ,revalidarToken );

export default router;