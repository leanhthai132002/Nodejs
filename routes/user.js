import { Router } from "express";
import { checkAuth } from '../middlewares/checkAuth';

const router = Router();

router.get('/user', checkAuth);
router.get('/user/:id', checkAuth);
router.post('/user', checkAuth);
router.delete('/user/:id', checkAuth);
router.patch("/user/:id", checkAuth)
    

export default router;