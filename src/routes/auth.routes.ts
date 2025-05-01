import express from 'express';
import { AuthControllers } from '../controllers/auth.controller';

const router = express.Router();

router.post('/register', AuthControllers.registeredUserController);

router.post('/login', AuthControllers.loginUserController);

export const AuthRoutes = router;
