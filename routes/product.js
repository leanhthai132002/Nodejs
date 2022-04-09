import { Router } from "express";
import { creat, list, read, remove, update } from "../controllers/product";
import { checkAuth,isAdmin, isAuth, requireSignin } from '../middlewares/checkAuth';
import { userById } from "../controllers/user";
const router = Router();

router.get('/products', list);
router.get('/product/:id', read);
router.post('/product', creat);
router.delete('/product/:id', remove);
router.put("/product/:id", update)




// router.get('/product', checkAuth, list);
// router.get('/product/:id', checkAuth, read);
// router.post('/products/:userId', requireSignin, isAuth, isAdmin,creat);
// router.delete('/product/:id', checkAuth, remove);
// router.put("/product/:id", checkAuth, update)

router.param ("userId", userById);

export default router;